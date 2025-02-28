import { StatusCodes } from 'http-status-codes'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'
import { getRunningExpressApp } from '../../utils/getRunningExpressApp'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'
import { User } from '../../database/entities/User'

interface RegisterData {
    email: string
    password: string
    username: string
}

const PASSWORD_SECRET = process.env.PASSWORD_SECRET || 'super_secret_key'

const hashPassword = (password: string): string => {
    return CryptoJS.HmacSHA256(password, PASSWORD_SECRET).toString()
}

const comparePasswords = (inputPassword: string, hashedPassword: string): boolean => {
    return hashPassword(inputPassword) === hashedPassword
}

// Login a user by checking the provided credentials and returning a JWT token
const login = async (email: string, password: string): Promise<{ token: string; id: string; username?: string }> => {
    if (!email || !password) {
        throw new InternalFlowiseError(StatusCodes.BAD_REQUEST, 'Email and password are required!')
    }

    try {
        const appServer = getRunningExpressApp()
        const userRepository = appServer.AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { email } })

        if (!user) {
            throw new InternalFlowiseError(StatusCodes.NOT_FOUND, 'User not found!')
        }

        if (!user.password) {
            throw new InternalFlowiseError(StatusCodes.UNAUTHORIZED, 'No password set for user. Please reset your password!')
        }

        if (!comparePasswords(password, user.password)) {
            throw new InternalFlowiseError(StatusCodes.UNAUTHORIZED, 'Invalid credentials!')
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1h'
        })

        return { token, id: user.id, username: user.username }
    } catch (error: any) {
        throw new InternalFlowiseError(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, `Login failed: ${error.message}`)
    }
}

// Register a new user and return the created user object
const register = async (userData: RegisterData): Promise<User> => {
    const { email, password, username } = userData

    if (!email || !password || !username) {
        throw new InternalFlowiseError(StatusCodes.BAD_REQUEST, 'Email, password, and username are required!')
    }

    try {
        const appServer = getRunningExpressApp()
        const userRepository = appServer.AppDataSource.getRepository(User)

        const existingUser = await userRepository.findOneBy({ email })
        if (existingUser) {
            throw new InternalFlowiseError(StatusCodes.CONFLICT, 'User already exists!')
        }

        const hashedPassword = hashPassword(password)

        const newUser = new User()
        newUser.email = email
        newUser.username = username
        newUser.password = hashedPassword

        const savedUser = await userRepository.save(newUser)
        return savedUser
    } catch (error: any) {
        throw new InternalFlowiseError(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, `Registration failed: ${error.message}`)
    }
}

export default {
    login,
    register
}

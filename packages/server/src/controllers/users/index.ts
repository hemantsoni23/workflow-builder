import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import user from '../../services/user/index'
import { InternalFlowiseError } from '../../errors/internalFlowiseError'

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                'Error: userController.login - Email and password must be provided!'
            )
        }
        const { token, id, username } = await user.login(email, password)

        return res.json({ token, id, email, username })
    } catch (error) {
        next(error)
    }
}

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password, username } = req.body

        if (!email || !password || !username) {
            throw new InternalFlowiseError(
                StatusCodes.PRECONDITION_FAILED,
                'Error: userController.register - Email, username and password must be provided!'
            )
        }

        const user2 = await user.register({ username, email, password })

        return res.status(StatusCodes.CREATED).json(user2)
    } catch (error) {
        next(error)
    }
}

export default {
    login,
    register
}

import { createPortal } from 'react-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Box } from '@mui/material'
import { StyledButton } from '@/ui-component/button/StyledButton'
import { Input } from '@/ui-component/input/Input'
// import Google from '../../utils/oAuthGoogle';
// import { GoogleOAuthProvider } from "@react-oauth/google";
// Api
import userApi from '@/api/user'

// Hooks
import useApi from '@/hooks/useApi'

const LoginDialog = ({ show, onConfirm }) => {
    const portalElement = document.getElementById('portal')

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [error, setError] = useState('')

    const userLoginApi = useApi(userApi.loginUser)
    const userRegisterApi = useApi(userApi.registerUser)

    // Ref to track the current request ID to prevent stale API responses from updating state.
    const requestIdRef = useRef(0)

    useEffect(() => {
        if (userLoginApi.data) {
            localStorage.setItem('currentUser', JSON.stringify(userLoginApi.data))
            setError('')

            onConfirm(username, email)
        }
    }, [userLoginApi.data, onConfirm])

    useEffect(() => {
        if (userRegisterApi.data) {
            setError('')

            onConfirm(username, email)
        }
    }, [userRegisterApi.data, onConfirm])

    useEffect(() => {
        if (userRegisterApi.error) {
            setError(userRegisterApi.error.response?.data?.message || userRegisterApi.error.message || 'Issue in registering...')
        }
    }, [userRegisterApi.error])

    useEffect(() => {
        if (userLoginApi.error) {
            setError(userLoginApi.error.response?.data?.message || userLoginApi.error.message || 'Issue in login...')
        }
    }, [userLoginApi.error])

    useEffect(() => {
        setError('')
    }, [isRegister])

    // Handle successful login
    useEffect(() => {
        if (userLoginApi.data) {
            localStorage.setItem('currentUser', JSON.stringify(userLoginApi.data))
            setError('')
            onConfirm(userLoginApi.data)
        }
    }, [userLoginApi.data, onConfirm])

    const handleAuth = useCallback(async () => {
        // Increment the request ID for each new authentication attempt.
        requestIdRef.current += 1
        const currentRequestId = requestIdRef.current

        setError('')

        if (isRegister) {
            if (!username.trim() || !email.trim() || !password) {
                setError('All fields are required.')
                return
            }
        } else {
            if (!email.trim() || !password) {
                setError('Email and Password are required.')
                return
            }
        }

        if (isRegister) {
            // Register new user.
            const newUserBody = {
                username: username.trim(),
                email: email.trim(),
                password
            }
            await userRegisterApi.request(newUserBody)

            if (currentRequestId !== requestIdRef.current) return

            if (userRegisterApi.error) {
                const errorMsg = userRegisterApi.error.response?.data?.message || userRegisterApi.error.message || 'Registration failed.'
                setError(errorMsg)
            } else if (userRegisterApi.data) {
                if (userRegisterApi.data.exists) {
                    setError('Account already exists. Please try logging in.')
                } else {
                    alert('Account created successfully! Please log in.')
                    setIsRegister(false)
                    setUsername('')
                    setPassword('')
                }
            }
        } else {
            const loginBody = { email: email.trim(), password }
            await userLoginApi.request(loginBody)

            if (currentRequestId !== requestIdRef.current) return

            if (userLoginApi.error) {
                const errorMsg = userLoginApi.error.response?.data?.message || userLoginApi.error.message || 'Login failed.'
                setError(errorMsg)
            }
        }
    }, [isRegister, username, email, password, userRegisterApi, userLoginApi])

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleAuth()
        }
    }

    if (!portalElement || !show) return null

    return createPortal(
        <Dialog onKeyUp={handleKeyUp} open={show} fullWidth maxWidth='xs' sx={{ borderRadius: '12px', padding: '10px' }}>
            <DialogTitle
                sx={{
                    textAlign: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#333'
                }}
            >
                {isRegister ? 'Create an Account' : 'Login'}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {isRegister && (
                        <>
                            <Typography sx={{ fontWeight: '500', color: '#555' }}>Username</Typography>
                            <Input
                                inputParam={{
                                    label: 'Username',
                                    name: 'username',
                                    type: 'text',
                                    placeholder: 'john_doe'
                                }}
                                onChange={(newValue) => setUsername(newValue)}
                                value={username}
                            />
                        </>
                    )}
                    <Typography sx={{ fontWeight: '500', color: '#555' }}>Email</Typography>
                    <Input
                        inputParam={{
                            label: 'Email',
                            name: 'email',
                            type: 'email',
                            placeholder: 'example@email.com'
                        }}
                        onChange={(newValue) => setEmail(newValue)}
                        value={email}
                    />
                    <Typography sx={{ fontWeight: '500', color: '#555' }}>Password</Typography>
                    <Input
                        inputParam={{
                            label: 'Password',
                            name: 'password',
                            type: 'password',
                            placeholder: '••••••••'
                        }}
                        onChange={(newValue) => setPassword(newValue)}
                        value={password}
                    />
                    {error && (
                        <Typography color='error' sx={{ fontSize: '0.9rem', textAlign: 'center' }}>
                            {error}
                        </Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <StyledButton
                    variant='contained'
                    onClick={handleAuth}
                    sx={{
                        width: '90%',
                        fontSize: '1rem',
                        padding: '10px',
                        fontWeight: 'bold',
                        backgroundColor: '#1976D2',
                        '&:hover': { backgroundColor: '#125ea5' }
                    }}
                >
                    {isRegister ? 'Sign Up' : 'Login'}
                </StyledButton>
                {/* <GoogleOAuthProvider clientId={"clientId"} >
            <Google />
          </GoogleOAuthProvider> */}
                <Typography
                    sx={{
                        fontSize: '0.9rem',
                        color: '#666',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline', color: '#1976D2' }
                    }}
                    onClick={() => {
                        setIsRegister(!isRegister)
                        setError('')
                    }}
                >
                    {isRegister ? 'Already have an account? Login' : 'Create an account'}
                </Typography>
            </DialogActions>
        </Dialog>,
        portalElement
    )
}

LoginDialog.propTypes = {
    show: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired
}

export default LoginDialog

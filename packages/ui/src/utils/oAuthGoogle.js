'use client'

import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

const googleLogin = async (token) => {
    try {
        const response = await axios.post(`${API_URL}/api/auth/google/login`, { token }, { withCredentials: true })
        return response.data
    } catch (error) {
        console.log(error)
        throw error.response?.data.message || 'An error occurred. Please try again.'
    }
}

const GoogleLoginButton = () => {
    const handleLoginSuccess = async (response) => {
        try {
            const userData = await googleLogin(response.credential)
            alert(userData?.message || 'Login successful!')
        } catch (error) {
            console.error('Login process failed:', error)
            alert('Login failed. Please try again.')
        }
    }

    const handleLoginFailure = (error) => {
        console.error('Login Failed:', error)
        alert('Login failed. Please try again.')
    }

    return <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} useOneTap />
}

export default GoogleLoginButton

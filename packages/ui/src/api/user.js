import client from './client'

const loginUser = (body) => client.post(`/user/login`, body)
const registerUser = (body) => client.post(`/user/register`, body)

export default {
    loginUser,
    registerUser
}

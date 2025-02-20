import client from './client'

const getAllChatflows = () => {
    const user_id = JSON.parse(localStorage.getItem('currentUser') || '{}').email
    return client.get(`/chatflows?type=CHATFLOW&user_id=${encodeURIComponent(user_id)}`)
}

const getAllAgentflows = () => client.get('/chatflows?type=MULTIAGENT')

const getSpecificChatflow = (id, user_id) => client.get(`/chatflows/${id}?user_id=${user_id}`)

const getSpecificChatflowFromPublicEndpoint = (id) => client.get(`/public-chatflows/${id}`)

const createNewChatflow = (body) => client.post(`/chatflows`, body)

const importChatflows = (body) => client.post(`/chatflows/importchatflows`, body)

const updateChatflow = (id, user_id, body) => client.put(`/chatflows/${id}?user_id=${user_id}`, body)

const deleteChatflow = (id) => client.delete(`/chatflows/${id}`)

const getIsChatflowStreaming = (id) => client.get(`/chatflows-streaming/${id}`)

const getAllowChatflowUploads = (id) => client.get(`/chatflows-uploads/${id}`)

export default {
    getAllChatflows,
    getAllAgentflows,
    getSpecificChatflow,
    getSpecificChatflowFromPublicEndpoint,
    createNewChatflow,
    importChatflows,
    updateChatflow,
    deleteChatflow,
    getIsChatflowStreaming,
    getAllowChatflowUploads
}

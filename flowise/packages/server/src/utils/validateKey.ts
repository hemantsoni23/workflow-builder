import { Request } from 'express'
import { ChatFlow } from '../database/entities/ChatFlow'
import apikeyService from '../services/apikey'

/**
 * Validate Chatflow API Key using x-user-id
 * @param {Request} req
 * @param {ChatFlow} chatflow
 */
export const validateChatflowAPIKey = async (req: Request, chatflow: ChatFlow) => {
    const chatFlowApiKeyId = chatflow?.apikeyid
    if (!chatFlowApiKeyId) return true

    const userId = req.headers['x-user-id'] as string
    if (!userId) return false

    const keys = await apikeyService.getAllApiKeys()
    const userApiKey = keys.find((key: any) => key.id === chatFlowApiKeyId)?.apiSecret

    return userApiKey === userId
}

/**
 * Validate API Key using x-user-id
 * @param {Request} req
 */
export const validateAPIKey = async (req: Request) => {
    const userId = req.headers['x-user-id'] as string
    if (!userId) return false

    const keys = await apikeyService.getAllApiKeys()
    const validUser = keys.some((key: any) => key.apiKey === userId)

    return validUser
}

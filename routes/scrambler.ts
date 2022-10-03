import { Router } from 'express'
import { getScramblerView, postScramblerData } from '../controllers/scrambler'

const scramblerRouter = Router()

scramblerRouter.get('/', getScramblerView)
scramblerRouter.post('/', postScramblerData)

export default scramblerRouter

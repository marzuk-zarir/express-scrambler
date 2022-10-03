import { Router } from 'express'
import scramblerRouter from './scrambler'

const rootRouter = Router()

rootRouter.use('/', scramblerRouter)

export default rootRouter

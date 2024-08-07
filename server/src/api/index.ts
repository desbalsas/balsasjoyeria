import { Router } from 'express'
import emojis from './emojis/emoji.routes'

const router = Router()

router.use('/emojis', emojis)

export default router

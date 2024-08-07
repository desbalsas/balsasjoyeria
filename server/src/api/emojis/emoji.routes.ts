import express from 'express'
import { getEmojis } from '../../controllers/emoji.controller'

const router = express.Router()

router.get('/', getEmojis)

export default router

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { unknowEndpoint } from './middlewares/unknow.endpoint'
import api from './api'
import { requestLogger } from './utils/logger.request'

// Init the app
const app = express()

// Middlewares befores routes
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('public'))

// Routes
app.use('/api/v1', api)

// Middlewares after routes
app.use(unknowEndpoint)

export default app

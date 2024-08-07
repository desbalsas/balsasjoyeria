require('dotenv').config()
import env from './utils/validate.env'
import logger from './utils/logger'
import app from './app'
import mongoose from 'mongoose'

const uri_database = env.MONGODB_URI
const database = env.MONGODB_DATABASE_NAME
const host = env.SERVER_HOST
const port = env.SERVER_PORT

app.listen(port, () => {
	mongoose.set('strictQuery', true)
	mongoose
		.connect(`${uri_database}/${database}`)
		.then((conn) => {
			logger.info(
				`Base de datos ${conn.connection.db.databaseName} ejecutándose a correctamente`,
			)
		})
		.catch((error) => {
			logger.error(`Error de conexión: ${error}`)
			process.exit(1)
		})

	logger.info(`El servidor se está ejecutándose en http://${host}:${port}`)
})

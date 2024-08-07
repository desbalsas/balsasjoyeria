import morgan from 'morgan'
import colors from 'colors'

// Middleware de morgan con formato personalizado
const stream = {
	// Use the http severity
	write: (message: string) => {
		// Elimina cualquier salto de línea adicional al final del mensaje
		const trimmedMessage = message.trim()
		console.log(trimmedMessage)
	},
}

const skip = () => {
	const env = process.env.NODE_ENV || 'development'
	return env !== 'development'
}

const getFormattedDate = () => {
	const date = new Date()
	const month = date.toLocaleString('en-US', { month: 'short' })
	const day = String(date.getDate()).padStart(2, '0')
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')
	const seconds = String(date.getSeconds()).padStart(2, '0')
	const milliseconds = String(date.getMilliseconds()).padStart(3, '0').slice(0, 2)

	return `${month.toUpperCase()} ${day} ${hours}:${minutes}:${seconds}.${milliseconds}`
}

export const requestLogger = morgan(
	(tokens, req, res) => {
		const method = tokens.method(req, res) || ''
		const url = tokens.url(req, res) || ''
		const status = tokens.status(req, res) || ''
		const responseTime = tokens['response-time'](req, res) || ''

		return [
			colors.cyan(getFormattedDate()),
			colors.blue(method),
			colors.yellow(status),
			colors.green(url),
			colors.magenta(`${responseTime} ms`),
		].join(' ')
	},
	{ skip, stream },
)

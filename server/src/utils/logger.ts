import winston from 'winston'
import env from './validate.env'

import {
	bgGreen,
	bgYellow,
	bgRed,
	white,
	red,
	bgMagenta,
	green,
	yellow,
	magenta,
	bgBlue,
} from 'colors'

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
}

const levelBGColor = (level: string) => {
	switch (level) {
		case 'info':
			return bgGreen
		case 'error':
			return bgRed
		case 'warn':
			return bgYellow
		case 'http':
			return bgMagenta
		default:
			return bgGreen
	}
}

const levelColor = (level: string) => {
	switch (level) {
		case 'info':
			return green
		case 'error':
			return red
		case 'warn':
			return yellow
		case 'http':
			return magenta
		default:
			return green
	}
}

const format = winston.format.combine(
	winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
	winston.format.printf(
		(info) =>
			`${bgBlue(` ${white(info.timestamp)} `)}${`${levelBGColor(info.level)(
				` ${info.level.toUpperCase()} `,
			)}`} ${levelColor(info.level)(info.message)}`,
	),
)

const level = () => {
	const isDevelopment = env.NODE_ENV === 'development'
	return isDevelopment ? 'debug' : 'warn'
}

const transports = [new winston.transports.Console()]

const logger = winston.createLogger({
	level: level(),
	levels,
	format,
	transports,
})

export default logger

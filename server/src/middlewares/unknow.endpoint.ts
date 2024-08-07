import type { RequestHandler } from 'express'

export const unknowEndpoint: RequestHandler = (_, res, next) => {
	res.status(404).send({ error: 'Unknown endpoint' })
	next()
}

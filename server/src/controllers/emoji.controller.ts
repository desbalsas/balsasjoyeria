/* export const getEmojis = (req, res) => {
	return res.status(200).json('👋😁👍')
} */

import type { Response, Request } from 'express'

export const getEmojis = (_: Request, res: Response) => {
	return res.status(200).json('👋😁👍')
}

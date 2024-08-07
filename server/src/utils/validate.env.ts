import { cleanEnv } from 'envalid'
import { port, str } from 'envalid/dist/validators'

export default cleanEnv(process.env, {
	// General
	JWT_SECRET: str(),
	NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
	FRONTEND_HOST: str(),

	// MongoDB Configuration
	MONGODB_URI: str(),
	MONGODB_DATABASE_NAME: str(),

	// Server
	SERVER_HOST: str(),
	SERVER_PORT: port(),

	// Cloudinary Configuration
	CLOUDINARY_CLOUD_NAME: str(),
	CLOUDINARY_API_KEY: str(),
	CLOUDINARY_API_SECRET: str(),

	// Google
	GOOGLE_SPREADSHEET_ID: str(),
	GOOGLE_SHEET_NAME: str(),
	GOOGLE_CREDENTIALS_PATH: str(),
})

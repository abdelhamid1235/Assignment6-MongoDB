import { resolve } from 'node:path'
import { config } from 'dotenv'
export const NODE_ENV = process.env.NODE_ENV ?? 'development'
config({ path: resolve(`.env.${NODE_ENV}`) })

export const PORT = parseInt(process.env.PORT ?? "9000")

export const DB_URL = process.env.DB_URL
export const DB_NAME = process.env.DB_NAME
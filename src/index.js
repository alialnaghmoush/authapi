import cors from 'cors'
import { connectDB, port} from './config'
import { success } from 'consola'
import express, { json } from 'express'

// Init express app
const app = express()

// Set a middlewares
app.use(cors())
app.use(json())

// Fire Server
async function main() {
  await connectDB()
  app.listen(port, () => success(`app listening on: http://localhost:${port}`))
}

main()

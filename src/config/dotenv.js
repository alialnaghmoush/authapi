import { config } from 'dotenv'
config()

const db = process.env.APP_DB
const port = process.env.PORT || process.env.APP_PORT
const secret = process.env.APP_SECRET
const sendgrid = process.env.APP_SENDGRID
const dbFix = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

export { db, port, secret, sendgrid, dbFix }

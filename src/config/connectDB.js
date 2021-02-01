import mongoose from 'mongoose'
import { db, dbFix } from './dotenv'
import { success, error } from 'consola'

export default async () => {
  try {
    await mongoose.connect(db, dbFix)
    success({ message: `mongoDB connected`, badge: true })
  } catch (err) {
    error({
      message: `Could not connect to the database. \n${err.message}`,
      badge: true,
    })
  }
}

import express from 'express'
import setmiddlewares from './middlewares'

const app = express()

setmiddlewares(app)

export default app

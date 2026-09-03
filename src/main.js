import express from 'express'
import {collectionController, bookController, logsController} from './modules/index.js'
import { globalErrorHandling } from './middleware/index.js'
import { bootstrap } from './DB/connection.db.js'
import { PORT } from './config.js'


const app = express()
const port = PORT

bootstrap(app , port)
app.use(express.json())

app.all("/", (req, res) => res.status(200).send({ message: "Welcome to BE API" }))

app.use("/collection" , collectionController)
app.use("/books", bookController)
app.use("/logs", logsController)


app.all("{/*dummy}", (req, res) => res.status(404).send({ message: "Invalid application routing" }))

app.use(globalErrorHandling)

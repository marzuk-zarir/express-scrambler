import express from 'express'
import rootRouter from './routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(rootRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

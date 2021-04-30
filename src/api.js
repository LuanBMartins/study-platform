const express = require('express')
const app = express()
const port = 5000
// routes
app.use(express.json())
const userRoute = require('./routes/user')


app.use('/user', userRoute)


app.listen(port, () => {
    console.log(`app listen to localhost:${port}`);
})
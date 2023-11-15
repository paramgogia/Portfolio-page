const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './portfolio.html'))
})
app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})

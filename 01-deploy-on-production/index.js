require('dotenv').config()
const express = require('express') // CommonJS Syntax
// import express from "express"   // ES6 Module Syntax
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
 res.send('This is Twitter')
})
app.get('/facebook', (req, res)=> {
    res.send('This is Facebook')
    
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

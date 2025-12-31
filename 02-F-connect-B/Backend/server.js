import express from 'express'
import 'dotenv/config'
import dotenv from 'dotenv'
const app = express()
const port = process.env.PORT || 3000


// Array of 5 joke objects
const jokes = [
  { id: 1, title: "Atoms", content: "Why don’t scientists trust atoms? Because they make up everything!" },
  { id: 2, title: "Math Book", content: "Why did the math book look sad? Because it had too many problems." },
  { id: 3, title: "Nose Length", content: "Why can’t your nose be 12 inches long? Because then it would be a foot." },
  { id: 4, title: "Computer Virus", content: "Why did the computer go to the doctor? Because it caught a virus." },
  { id: 5, title: "Programmers & Nature", content: "Why don’t programmers like nature? Too many bugs." }
];

// Example: print all jokes
// jokes.forEach(item => console.log(item.joke));

app.get('/api/jokes', (req, res)=> {
    res.json(jokes)
})

app.get('/', (req, res) => {
  res.send('Server is running')
})

// get a list of the jokes
app.get('/jokes', (req, res)=> {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

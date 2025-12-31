require('dotenv').config()
const express = require('express') // CommonJS Syntax
// import express from "express"   // ES6 Module Syntax
const app = express()
const port = 3000

const github = {
"login": "DrMuhammadJawadAli",
"id": 166320543,
"node_id": "U_kgDOCenZnw",
"avatar_url": "https://avatars.githubusercontent.com/u/166320543?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/DrMuhammadJawadAli",
"html_url": "https://github.com/DrMuhammadJawadAli",
"followers_url": "https://api.github.com/users/DrMuhammadJawadAli/followers",
"following_url": "https://api.github.com/users/DrMuhammadJawadAli/following{/other_user}",
"gists_url": "https://api.github.com/users/DrMuhammadJawadAli/gists{/gist_id}",
"starred_url": "https://api.github.com/users/DrMuhammadJawadAli/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/DrMuhammadJawadAli/subscriptions",
"organizations_url": "https://api.github.com/users/DrMuhammadJawadAli/orgs",
"repos_url": "https://api.github.com/users/DrMuhammadJawadAli/repos",
"events_url": "https://api.github.com/users/DrMuhammadJawadAli/events{/privacy}",
"received_events_url": "https://api.github.com/users/DrMuhammadJawadAli/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Dr. Muhammad jawad",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": "In the process.....",
"twitter_username": "OnFuturebutton",
"public_repos": 7,
"public_gists": 0,
"followers": 0,
"following": 3,
"created_at": "2024-04-07T16:32:13Z",
"updated_at": "2025-12-31T12:56:52Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
 res.send('This is Twitter')
})
app.get('/facebook', (req, res)=> {
    res.send('This is Facebook')
    
})
app.get('/github', (req, res) => {
  res.json(github)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

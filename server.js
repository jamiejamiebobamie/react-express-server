/* eslint-disable semi */
const express = require('express')
const bodyParser = require('body-parser')

const { random, randomD, randomRolls } = require('./utils')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})


// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({ about: 'This service generates a random number.' })
})

// Random number route
// Test this route with: http://localhost:4000/random/99
// Where n=99 sets the range of the random number returned
app.get('/random/:n', (req, res) => {
  const { n } = req.params;
  const value = random(n)
  res.json({ value })
})

// /random/die/6 returns value from 1 to 6
app.get('/random/die/:n', (req, res) => {
  const { n } = req.params;
  const value = randomD(n)
  res.json({ value })
})

// /random/dice/3/3
// n == number of dice
// s == dice sides
app.get('/random/dice/:n/:s', (req, res) => {
  const { n, s } = req.params;
  // const { n, s } = req.query
  const rolls = randomRolls(n, s)
  res.json({ rolls }) // { "rolls": [1,2,3] }
})

const port = 4000
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))

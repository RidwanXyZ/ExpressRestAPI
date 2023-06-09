'use strict'

const express = require('express')
const scrape = require('./lib/scraper')
const rateLimit = require('express-rate-limit')
const res = require('express/lib/response')
const app = express()
const port = 8000
const hostname = 'ridwandev.xyz' || 'localhost'



const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20
})

app.get('/', (req, res) => {
  res.send('<h3>Hello World')
})

const route = express.Router();

route.get('/detik', async (req, res) => {
  try {
    res.status(200).json(await scrape.detik())

    //res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'can\'t scrape detik.com' })
  }
})

route.get('/animesearch', async (req, res) => {
  const { title } = req.query;
  if (!title) {
    res.send('Please provide a title in the query!');
    return;
  }

  try {
    const searchResults = await scrape.aniList(title);
    res.json(searchResults);
  } catch (error) {
    res.status(500).send('An error occurred while searching for anime.');
  }
});

route.get('/xnxx', async (req, res) => {
  const { q } = req.query;
  res.json(await scrape.xnxx(q))
})

app.use('/api', route)
app.use(limiter)

app.listen(port || 3000, hostname, () => {
  console.log('App starting on port ' + hostname + ':' + port)
})

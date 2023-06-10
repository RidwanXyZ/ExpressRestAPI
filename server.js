"use strict";

const express = require("express");
const scrape = require("./lib/scraper");
const rateLimit = require("express-rate-limit");

const app = express();
const port = 8000;

const https = require("https")
const http = require("http")
const path = require("path")
const fs = require("fs")


const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 20,
});

app.get("/", (req, res) => {
  res.send("<h3>Hello World</h3>");
});

const route = express.Router();

route.get("/detik", async (req, res) => {
  try {
    const data = await scrape.detik();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Can't scrape detik.com" });
  }
});

route.get("/animesearch", async (req, res) => {
  const { title } = req.query;
  if (!title) {
    res.send("Please provide a title in the query!");
    return;
  }

  try {
    const searchResults = await scrape.aniList(title);
    res.json(searchResults);
  } catch (error) {
    res.status(500).send("An error occurred while searching for anime.");
  }
});

route.get("/xnxx", async (req, res) => {
  const { q } = req.query;
  try {
    const searchResults = await scrape.xnxx(q);
    res.json(searchResults);
  } catch (error) {
    res.status(500).send("An error occurred while searching on xnxx.");
  }
});

app.use("/api", route);
app.use(limiter);

// app.listen(port || 3000, hostname, () => {
//   console.log("App starting on " + hostname + ":" + port);
// });


const httpServer = http.createServer(app)

httpServer.listen(3000, () => {
    console.log("HTTP server up and running on port 3000")
})
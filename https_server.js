const https = require("https");
// const hostname = "ridwandev.xyz"; //Change to yourdomain.com

const express = require("express");
const app = express();

const fs = require("fs");

app.get("/", (req,res)=> {
    res.send("Server ready!...")
})


const options = {
  key: fs.readFileSync("./certs/private.key"), //Change Private Key Path here
  cert: fs.readFileSync("./certs/certificate.crt"), //Change Main Certificate Path here
  ca: fs.readFileSync("./certs/ca_bundle.crt"), //Change Intermediate Certificate Path here
};

https.createServer(options, app).listen(433, function (req, res) {
  //Change Port Number here (if required, 443 is the standard port for https)
  console.log("Server started at port 433"); //and here
});

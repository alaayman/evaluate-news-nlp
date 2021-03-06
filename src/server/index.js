//********************************************************** */
const dotenv = require("dotenv").config();
const apiKey = process.env.API_KEY;
const apiBaseUrl = "https://api.meaningcloud.com/sentiment-2.1";
//********************************************************** */
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios").default;
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");

const app = express();
app.use(express.static(path.resolve("dist")));
// console.log(path.resolve("dist"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve('src/client/views/index.html'))
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/result", async (req, res) => {
  console.log("request is ::: -- ::: ", req.body);
  const response = await axios
    .post(apiBaseUrl, {
      key: apiKey,
      url: req.body.analysisUrl,
      lang: req.body.lang,
    })
    .then((res) => {
      // console.log("res from axios", res.data);
      return res.data;
    });
  res.send(response);
});

const port = 3000;
app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});

const express = require("express")
const geocode = require("./geocode")
const weather = require("./weather")

const port = process.env.PORT || 3000;

const app = express()

app.listen(port)

app.get("/",
    (req,res) => {
        res.send("<a href='/test_text'>/test_text</a>")
    }
)


app.get("/test_text",
    (req,res) => {
        res.send("18360859018")
    }
)
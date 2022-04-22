const { default: axios } = require("axios")
const express = require("express")
const request = require("request")
const geocode = require("./geocode")
const weather = require("./weather")
axios.get
const port = process.env.PORT || 3000;

const app = express()

app.listen(port)

app.get("/",
    (req, res) => {
        res.send("<a href='/test_text'>/test_text</a>")
    }
)


app.get("/test_text",
    (req, res) => {
        res.send("18360859018")
    }
)

app.get("/test_html",
    (req, res) => {
        res.send("Adem PELİT")
    }
)

app.get("/test_json",
    (req, res) => {
        text = JSON.stringify(
            {
                numara: "18360859018",
                ad: "Adem",
                soyad: "PELİT"
            }
        )
        res.send(text)
    }
)
app.get("/test_geocode",
    (req, res) => {
        url = "http://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent("Bursa") + ".json?access_token=pk.eyJ1IjoiaWZzNSIsImEiOiJjbDFveGZ2cjIxNjV3M2tvMm1kaW45MjF3In0.jakzckr8Zkj8Xdbo8yQ05w"
        result = ""
        axios.get(url).then((resq)=>{
            console.log(resq.data.features[0].center)
        })
        res.send("resq")
    }
)
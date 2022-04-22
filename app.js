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
        res.send("<a href='/test_text'>/test_text</a><br><a href='/test_html'>/test_html</a><br><a href='/test_json'>/test_json</a><br><a href='/test_geocode'>/test_geocode</a><br><a href='/test_weather'>/test_weather</a><br></br>")
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
        axios.get(url).then((resq)=>{
            res.send(JSON.stringify(
                {
                    enlem:resq.data.features[0].center[0],
                    boylam:resq.data.features[0].center[1]
                }
            ))
        })
    }
)

app.get("/test_weather",
    (req, res) => {
        console.log(weather)
        url = "http://api.weatherstack.com/current?access_key=67fbcd5cf69daf6faa39b12e2b661a56&query=40.18333,29.06667&units=m"
        axios.get(url).then((resq)=>{
            res.send(JSON.stringify(
                {
                    temperature: resq.data.current.temperature,
                    pressure: resq.data.current.pressure,
                    humidity: resq.data.current.humidity
                }
            ))
        })
    }
)
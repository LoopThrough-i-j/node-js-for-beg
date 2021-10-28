const express = require("express")

const app = express()

app.get("/test", (req, res) => {
    res.json({ response: "Hello World" })
})

app.listen(8080, () => {
    console.log("http://localhost:8080/")
})

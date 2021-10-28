const express = require("express")
const task1 = require("./tasks/task1")
const app = express()


app.use("/task1", task1)
app.get("/test", (req, res) => {
    res.json({ response: "Hello World" })
})

app.listen(8080, () => {
    console.log("http://localhost:8080/")
})

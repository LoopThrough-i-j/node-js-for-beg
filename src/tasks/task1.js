const { Router } = require("express")
const router = Router()

router.get("/1", (req, res) => {
    return res.json({ task: 1, router: 1 })
})

router.get("/2", (req, res) => {
    const { num } = req.query
    return res.json({ task: 1, router: 2, number: num })
})

router.get("/3", (req, res) => {
    let { num } = req.query
    num = parseInt(num)
    return res.json({ task: 1, router: 3, number: num })
})

const sq = num => num * num

router.get("/4", (req, res) => {
    let { num } = req.query
    num = parseInt(num)
    return res.json({ task: 1, router: 4, number: sq(num) })
})

const checkNum = (req, res, next) => {
    let { num } = req.query
    if (isNaN(num)) {
        return res.json({ success: false, message: "PLease Send a Number" })
    } else {
        return next()
    }
}

router.get("/5", checkNum, (req, res) => {
    let { num } = req.query
    num = parseInt(num)
    return res.json({ task: 1, router: 5, number: sq(num) })
})

router.get("/6", checkNum, (req, res) => {
    let { num } = req.query
    num = parseInt(num)
    return res.json({ task: 1, router: 5, number: -num })
})

module.exports = router

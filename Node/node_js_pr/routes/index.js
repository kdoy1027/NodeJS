const express = require('express')
const router = express.Router()

router.get('./in', (req, res) =>{
    res.send('hello world!')
})

module.exports = router;

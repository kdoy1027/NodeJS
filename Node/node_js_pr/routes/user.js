const express = require('express')
const router = express.router()

router.get('./iam', (req, res)=>{
    res.send('hello user!')
}) 

module.exports = router;


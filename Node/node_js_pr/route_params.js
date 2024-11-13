const express = require('express');
const router = express.Router();

router.get('/user/:id', (req, res) => {
    console.log(req.params.id); // 매개변수라서 .params로 접근을 한다.
});

// /user/foo로 들어가도 실행되지 않음
router.get('/user/foo', (req,res) => {
    console.log('Hello, foo!');
}); // => 따라서, router.get('/user/:id', (req, res) => { 보다 위에 위치해야함.

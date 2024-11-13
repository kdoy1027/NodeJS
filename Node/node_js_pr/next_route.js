const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    next('route'); // 다음 라우터 미들웨어로 점프한다.
}, (req, res, next) => {
    console.log('실행되지 않습니다.');
    next();
});

router.get('/', (req, res) => {
    console.log('실행됩니다.');
    res.send('Hello, Express.');
});

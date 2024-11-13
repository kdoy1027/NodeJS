const express = require('express');
const router = express.Router();

router.get('/user/:id', (req, res) => {
    console.log(req.params, req.query);
    res.send(`아무 말이나 쓰세요`);
});

app.use('/', router);


///users/123?limit=5&skip=10 라는 주소로 요청을 하면
// => { id: '123' } { limit: '5', skip: '10' } 라는 결과가 나옴


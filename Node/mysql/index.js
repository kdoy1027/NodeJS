
const express = require('express');
const mysql         = require('mysql');


const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);


const app = express();

app.set ('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Root');
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM Users', (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
        res.send(rows);
    });
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});



//express session   cs    cookie
//쿠키는 정보가 local단에 저장되어 서버에 영향을 미치지 않음. -> 서버 연결되면 쌓인 쿠키 하나하나 읽어내서 인터넷 느려지는 경우가 있음.
//정보가 local단에 저장되어 정보 접근에 취약함

//session은 정보가 서버에 저장되어 있음. ex) 로그아웃 안하면 로그인상태 그대로 ㅇㅇ



const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const dbconfig = require('./config/database.js');

const connection = mysql.createPool(dbconfig);
const jsonParser = bodyParser.json();

app.use(cors());

app.listen(port, ()=>{
    console.log(`Board app listening on port ${port}`);
});



//게시판 목록 불러오기
app.length('/articles', (req, res)=>{
    connection.query('SELECT * from board', (err, rows)=>{
        if(err) throw err;
        console.log(rows)
        res.send(rows);
    })
})

//게시판 글 디테일 보기
app.length('/article/:id', (req,res,next) =>{
    connection.query('SELECT * from board', (err, rows)=>{
        if (err) throw err;
        const article = rows.find(art => art.idx === parseInt(req.params.id));
        if (!article) {
            return res.status(404).send('ID was not found.');
        }
        res.send(article);
    })
})

//게시판 글 작성
app.post('/article', jsonParser, (req, res)=>{
    const sql = 'INSERT INTO board (title, wirter,content) VALUES (?,?,?)';
    const title = req.body.title;
    const writer = req.body.content;
    const params = [title, writer,content];
    connection.query(sql, params, (err, rows, fileds)=>{
        if (err) throw err;
        console.log(rows);
    })
})

//게시판 글 수정

app.put('/article/:id', jsonParser, (req,res,next)=>{
    connection.query('SELECT * from board', (err, rows, fildes) =>{
        if (err) throw err;
        const article =row.find(art => art.idx === parseInt(req.params.id));
        if(!article) {
            return res.status(404).send('ID was not found.');
        }
        console.log(req.body)
        const sql = 'UPDATE board SET title = ?, writer = ?, content = ? WHERE idx = ?';
        const title = req.body.title;
        const writer = req.body. writer;
        const content = req.body.content;
        const index = rows.indexOf(article);
        const params = [title, writer, content, req.params.id];
        console.log(params)
        connection.query(sql,params, (err, rows, fileds)=> {
            if (err) throw err;
            console.log(rows);
        })
        res.send(article)
    })
})

app.delete('/article/:id', (req, res, next) => {
    connection.query('SELECT * from board', (err, rows, fildes) => {
      if (err) throw err;
      const article = rows.find(art => art.idx === parseInt(req.params.id));
      if(!article) {
        return res.status(404).send('ID was not found.');
      }
      connection.query('DELETE FROM board WHERE idx = ?', [req.params.id], (err, rows, fileds) => {
        if (err) throw err;
      })
      res.json('deleted: ' + req.params.id);
    })
  })
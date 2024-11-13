//몽고DB 접속코드 만들기(394P)
const mongoclient = require('mongodb').MongoClient;
const ObjId = require('mongodb').ObjectId
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const url ='mongodb+srv://admin:1234@cluster0.e6uuv.mongodb.net/';      // 커넥션 스트링(접속 코드)을 url 변수에 할당하고,
mongoclient.connect(url)                                                // 가져온 몽고db 모듈에 url매개변수를 가지는 connect 함수(서버 접속 기능) 실행
    .then(client => {                                                   // => 서버 접속되면 .then 함수의 결과로 몽고db client 객체 생성
        mydb = client.db('myboard');                                    // => 몽고디비 모듈의 myboard 데이터베이스 접속 객체
        // mydb.collection('post').find().toArray().then(result=>{     // 몽고db 데이터베이스의 myboard(데이터베이스)를 mydb변수로 할당하고 mydb.collection()함수를 사용하여,
        //     console.log(result)                                     // post 컬렉션 내에서 데이터를 읽어오고(.find()함수), 배열의 형태로 가져와서(.toArray()함수) 그 값을 result라는 객체에 저장한다.
        // })                                                          // => result에 저장된 값을 콘솔창에 표시(find(조건) 및 배열의 형태로)
        
        app.listen(8080, ()=>{                                      // => 서버 8080 열려있다고 표시
            console.log("포트 8080으로 서버 대기 중...")
        })
    }).catch((err)=>{
        console.log(err);
    })



//MySQL + Node.js 접속코드
let mysql = require("mysql");
let conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'myboard'
})

conn.connect();


// conn.query("select * from post", function(err, rows, fields){
//     if (err) throw err;
//     console.log(rows)
// });






app.set('view engine','ejs');

app.use(express.static("public"));

//body-parser 추가
//ejs 모듈 추가




// app.get("/book", function(req,res){
//     res.send('도서 목록 관련 페이지입니다.')
// })

app.get("/", function(req,res){
    res.render("index.ejs")
})

app.get('/list', function(req, res){
    mydb.collection('post').find().toArray().then(result =>{
    // console.log(result);
    res.render('list.ejs', {data : result})
    }) //render('렌더링할 파일', 파일에 전달할 데이터)
});

//'enter' 요청에 대한 처리 루틴
app.get('/enter', function(req,res){
    res.render('enter.ejs');
});

//'/save' 요청에 대한 post 방식의 처리 루틴
app.post('/save', function(req,res){
    console.log(req.body.title)
    console.log(req.body.content)
    console.log(req.body.someDate)
    //몽고DB에 폼 데이터 저장하기
    mydb.collection('post').insertOne({
        title : req.body.title, 
        content : req.body.content,
        date : req.body.someDate
    }).then(result =>{
        console.log(result)
        console.log("데이터 추가 성공")
    })
    res.redirect("/list")
})



    //Mysql DB에 폼 데이터 저장하기
// app.post('/save', function(req,res){
//     console.log(req.body.title)
//     console.log(req.body.content)
//     let sql = "insert into post (title, content, created)VALUES(?,?,NOW())";
//     let params = [req.body.title, req.body.content];
//     conn.query(sql, params, function (err, result){
//         if(err) throw err;
//         console.log('데이터 추가 성공')
//     });
//     res.send('데이터 추가 성공')
// })

app.post("/delete", function(req,res){
    console.log(req.body._id);
    req.body._id = new ObjId(req.body._id)                 
    mydb.collection('post').deleteOne(req.body)
    .then(result =>{
        console.log('삭제완료!');
        res.status(200).send();
    }).catch(err=>{
        console.log(err);
        res.status(500).send(); 
    })
});

//'content' 요청에 대한 처리 루틴
app.get('/content/:id', function(req,res){
    console.log(req.params.id)
    req.params.id = new ObjId(req.params.id);
    mydb
        .collection("post")
        .findOne({ _id : req.params.id})
        .then((result)=>{
        console.log(result)
        res.render("content.ejs", {data : result})
        })
})

//'/edit' 수정 요청에 대한 루틴
app.get("/edit/:id", function (req,res) {
    req.params.id = new ObjId(req.params.id)
    mydb
        .collection("post")
        .findOne({_id : req.params.id})
        .then((result)=>{
            console.log(result)
            res.render("edit.ejs", {data : result})
        })
});

app.post("/edit", function(req,res){
    console.log(req.body);
    req.body.id = new ObjId(req.body.id);
    mydb
        .collection("post")
        .updateOne({_id : req.body.id}, {$set : {title : req.body.title, content :req.body.content, date : req.body.someDate}})
        .then((result)=>{
            console.log("수정완료");
            res.redirect('/list')
        }).catch((err)=>{
            console.log(err)
        })
})

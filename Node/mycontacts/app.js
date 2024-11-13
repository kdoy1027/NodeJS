const express = require("express");
const dbConnect = require("./config/dbConnect")
const methodOverride = require("method-override")
const app = express();



app.set("view engine", "ejs")  //ejs 모듈 가져와서 실행 중      
app.set("views", "./views")  // views 폴더의 getAll.ejs파일을 불러와 실행 => 이 때 보여지는 동작은 정적인 동작???

app.use(express.static("./public")); // 

app.use(methodOverride("_method"))
const port = 3000;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", require("./routes/contactRoutes"));

app.listen(port, ()=>{
  console.log(`${port}번 포트에서 서버 실행중`);
})

/*

// const errorhandler = require("./middlewares/errorhandler");
// const router = express.Router();


const requestTime = (req, res, next) => {
  let today = new Date();
  let now = today.toLocaleTimeString();
  req.requestTime = now;
  next();
}


app.use(requestTime);


// const logger = (req, res, next) => {
//   console.log("User Logged");
//   next();
// };

app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.route("/").get((req, res) => {
  const responseText = `Hello Node! \n 요청시간 : ${req.requestTime}`;
  res.set("Content-type", "text/plain");
  res.send(responseText);
});

// app.use(logger);

// app.use("/", require("./routes/contactRoutes"));


app.get("/test", (req, res, next) => {
  const error = new Error("테스트용 에러");
  error.status =401;
  next(error);
});

app.use(errorhandler);
*/
const express =require('express')
const app = express()

const indexRouter = require('./routes/index.js')
const userRouter = require('./routes/user.js')

app.set('port', process.env.PORT || 3001) //procees.env 라는 객체에 port 설정이 있다면 그 속성을 사용하고 아니라면 3001번 포트를 사용하겠음.
//기본형태 app.set('port', <portNumber>)를 통해 설정함. 이렇게 하면 포트 번호를 중앙에서 관리할 수 있어, 나중에 변경할 때 코드의 다른 부분을 수정할 필요 x


app.use('/', indexRouter) 
// app.use()는 애플리케이션의 미들웨어 등록하는 메서드.
// '/' => 루트 경로를 나타내며, 애플리케이션의 기본 URL을 의미함. 이 경로로 들어오는 모든 요청이 indexRouter라는 라우터 객체를 통해 처리됨.
app.use('/user', userRouter)

app.use((req, res, next)=>{
    res.status(404).send('NOT FOUND!')
})

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 실행 중...')
})


























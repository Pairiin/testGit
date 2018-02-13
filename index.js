const Koa = require("koa")
const Router = require("koa-router")
const bodyParser = require("koa-bodyparser")
const sendUser = require("./node/senduser")

const App = new Koa()
const router = new Router()


App.use(bodyParser())
// router.post('/:senduser',async function (context){

//     let data = context.request.body
//     let a = (new Date()).getFullYear() - data.age
//     if(a > 20){
//         a = "ผู้ใหญ่"
//     }
//     else {
//         a = "เด็ก"
//     }
//     context.body = data.age + ' = ' + a
//  })
//  router.post('/senduser',async function(context){
//   let data =  context.request.body //เอา data ทั้งก้อนมาใส่ในตัวแปร data
//   var d = 2561-data.age

//   if(d<18){
//     context.body = "dek"
//   }else {context.body = "puyai"}

// })

// router.get('/:name/:age',async function (context){

//     // console.log(context.params.name)
//     let data = {
//         name : context.params.name,
//         age : context.params.age
//     }
//     // context.body = context.params.name + ' ' + context.params.age + ' hyi'
//     context.body = data
// })

router.use('/user', sendUser.routes())

App.use(router.routes())
App.use(router.allowedMethods())


App.listen(3000)
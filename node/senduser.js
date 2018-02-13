const Router = require("koa-router")
const User = new Router()

User.post('/:senduser',async function (context){

    let data = context.request.body
    let a = (new Date()).getFullYear() - data.age
    if(a > 20){
        context.body = "ผู้ใหญ่"
    }
    else {
        context.body = "เด็ก"
    }
 })

User.get('/:name/:age',async function (context){

    // console.log(context.params.name)
    let data = {
        name : context.params.name,
        age : context.params.age
    }
    context.body = context.params.name + ' ' + context.params.age + ' hyi'
    context.body = data
})

 module.exports = User
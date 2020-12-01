import Koa from 'koa'
const app:Koa =new Koa()

app.use(async(ctx:Koa.DefaultContext)=>{ctx.body='hello koa2'})

const port:number =8124

app.listen(port,()=>{
  console.log(`seccess start server`)
  console.log(`local: http://127.0.0.1:${port}`)
})
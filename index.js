const koa = require('koa')
var packageJson = require('./package.json')

const app = new koa()

// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async ctx => {
  ctx.body = `hello version: ${packageJson.version}`
  console.log('4')
})

app.listen(3000)
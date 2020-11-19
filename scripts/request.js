const url = require('url')
const queryString = require('querystring')
const G = {}
G._get = {}
G._post = {}

const changeRes = (res) => {
  res.send = (data) => {
    res.writeHead(200, {
      'content-type': "application/json;charest='utf-8'",
    })
    res.end(data)
  }
}

const app = (req, res) => {
  // 扩展res
  changeRes(res)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,DELETE,GET,PUT,POST')
  res.setHeader('Access-Control-Max-Age', 1728000)
  // res.setHeader('Content-Type', 'application/json;charset=utf-8')
  const pathName = url.parse(req.url).pathname
  const method = req.method.toLowerCase()
  console.log(method)
  // [pathName]
  if (G[`_${method}`][pathName]) {
    if (method === 'get') {
      G._get[pathName](req, res)
    } else if (method === 'post') {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
      })
      req.on('end', () => {
        req.body = data
        G._post[pathName](req, res)
      })
    }
  } else {
    res.end('404 not found')
  }
}

app.get = (str, callback) => {
  G._get[str] = callback
}

app.post = (str, callback) => {
  G._post[str] = callback
}

module.exports = { app }

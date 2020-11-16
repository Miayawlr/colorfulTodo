const url = require('url')
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
  const pathName = url.parse(req.url).pathname
  const method = req.method.toLowerCase()
  console.log(method)
  if (G[`_${method}`][pathName]) {
    // method === 'get' ? G._get[pathName](req, res) : G._post[pathName](req, res)
    if (method === 'get') {
      G._get[pathName](req, res)
    } else if (method === 'post') {
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

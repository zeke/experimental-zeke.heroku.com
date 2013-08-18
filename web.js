var http = require('http')
var fs = require('fs')
var hyperstream = require('hyperstream')
var post = require('markdown-directory')(__dirname + '/posts')

var server = http.createServer(function (req, res) {
  var m = RegExp('^/(.+)').exec(req.url)
  if (!m) return res.end('beep boop\n')

  res.setHeader('content-type', 'text/html')
  fs.createReadStream(__dirname + '/post.html')
    .pipe(hyperstream({
      'title': m[1],
      '#post': post(m[1]),
    }))
    .pipe(res)

})
server.listen(process.env.PORT || 9000)
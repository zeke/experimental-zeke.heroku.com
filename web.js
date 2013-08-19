var http = require('http')
var fs = require('fs')
var _ = require('lodash')
var hyperstream = require('hyperstream')
var mm = require('marky-mark');
var hljs = require('highlight.js')

// Gather and parse markdown files and their YAML frontmatter
var posts = mm.parseDirectorySync(__dirname + "/posts");

// Remove non-markdown files from the collection
posts = _.select(posts, function(post) {
  return post.filenameExtension === '.md'
})

var server = http.createServer(function (req, res) {

  var slug = RegExp('^/(.+)').exec(req.url)[1]

  // Find a post with filename matching the requested slug
  var post = _.find(posts, function(post) { return post.filename === slug })

  // Post not found? Render the homepage.
  if (!post) {
    return fs.createReadStream(__dirname + '/index.html').pipe(res)
  }

  res.setHeader('content-type', 'text/html')
  fs.createReadStream(__dirname + '/post.html')
    .pipe(hyperstream({
      'title': post.meta.title,
      '#post': post.content,
    }))
    .pipe(res)

})
server.listen(process.env.PORT || 9000)
const http = require('http')
const axios = require('axios')
const cheerio = require('cheerio')

const URL = 'https://juejin.im/?utm_source=gold_browser_extension'

const server = http.createServer()

server.on('request', (req, res) => {
  axios
    .get(URL)
    .then(data => {
      // console.log(data.data)
      res.setHeader('Content-Type','text/html;charset=utf-8')
      let str = ''
      const $ = cheerio.load(data.data)
      const $lis = $('ul.entry-list').children('li.item')
      $lis.each((index, item) => {
        let $item = $(item)
        const title = $item.find('a.title').text()
        const username = $item.find('li.username').text()
        str += `
          <h5>${title}</h5>
          <p><span>${username}</span></p>  
        `
      })
      res.end(str)
    })
})

server.listen(3000)
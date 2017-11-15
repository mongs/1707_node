const Events = require('events')
class MyEmitter extends Events {}
const emitter = new MyEmitter()

// 监听
emitter.on('handler', () => {
  console.log('handler')
})

emitter.on('听课', () => {
  console.log('听课')
})

// 发射
emitter.emit('handler')

setTimeout(() => {
  emitter.emit('handler')
  emitter.emit('听课')
},3000)
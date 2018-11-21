var redis = require('redis')
var Vue = require('vue')
var client = redis.createClient({
  host: '127.0.0.1',
  port: '6379',
  password: ''
})
client.on('ready', function (res) {
  console.log('ready ok ', res)
})

client.auth('', function (res) {
  console.log('auth success', res)
})

// 错误监听？
client.on('error', function (err) {
  console.log('Error ' + err)
})

client.set('string key', 'string val', redis.print)// set "string key" "string val"
/*
redis.print，回调函数，将redis的返回值显示出来。上一句执行结果，将返回“OK”
*/
client.hset('hash key', 'hashtest 1', 'some value', redis.print)

// client.hkeys('hash key', function (err, replies) {
//   console.log(replies.length + ' replies:')
//   replies.forEach(function (reply, i) {
//     console.log('    ' + i + ': ' + reply)
//   })
// })
client.hget('hash key', 'hashtest 1', redis.print)

/* 两种都可以断掉与redis的连接，
end()很粗暴，不管3721，一下子退出来了，上面那句获取哈希表"hash key"的某个元素值的表达式将没有结果返回
而quit()则是先将语句处理完毕再干净地退出，斯文得很
*/
// client.end();
// client.quit()
export default {
  install: function () {
    Vue.prototype.$redisClient = redis.client
  }
}

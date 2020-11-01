require('dotenv').config()

var path = require('path')
var config =  require(path.join(__dirname, 'config.js'))

var Twit = require('twit')

const Bot = new Twit(config);

console.log('ta rodano')

tuites = ['te amo', 'a paula te ama', 'voce e gay', 'te amo 1 pouco', 'amo voce']

BotInit = () => {

    indice =  Math.floor(Math.random() * (4 - 0 + 1)) + 0;

    console.log(tuites[indice])

    Bot.post('statuses/update', {
        status: '@willanelle ' + tuites[indice]
    }, function(err, data) {
        console.log(data)
    })
}

setInterval(BotInit, 24*60*60*1000);

BotInit();
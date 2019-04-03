var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/all', {useNewUrlParser: true});
var async = require('async')
var Hard = require('./models/hard').Hard;
// очистим бд
// вставим три героя
// закроем соединение с бд
function open(callback){
  mongoose.connection.on('open', callback)
}

function dropDB(callback){
  var db = mongoose.connection.db
  db.dropDatabase(callback)}

function insertHard(callback){
    async.parallel([
      function(callback){
        var cpu = new Hard({
          nick: "CPU"
        })
        cpu.save(function(err,cpu){
          callback(err, "CPU")
        })
      },
      function(callback){
        var hdd = new Hard({
          nick: "HDD"
        })
        hdd.save(function(err,hdd){
          callback(err,"HDD")
        })
      },
      function(callback){
        var motherboard =new Hard({
          nick: "Motherboard"
        })
        motherboard.save(function(err,motherboard){
          callback(err,"Motherboard")
        }),
      },
      function(callback){
        var powersupply =new Hard({
          nick: "Powersupply"
        })
        powersupply.save(function(err,powersupply){
          callback(err,"Powersupply")
        })
      },
      function(callback){
        var ram =new Hard({
          nick: "RAM"
        })
        ram.save(function(err,ram){
          callback(err,"RAM")
        })
      },
      function(callback){
        var videocard =new Hard({
          nick: "Videocard"
        })
        videocard.save(function(err,videocard){
          callback(err,"Videocard")
        })
      }
    ],
    function(err,result){
      callback(err)
    })
  }
  function close(callback){
    mongoose.disconnect(callback)
  }

  async.series([
    open,
    dropDB,
    insertHero,
    close
  ],
function(err,result){
  if(err) throw err
  console.log("OK!!!")
}
)

var express = require('express');
var router = express.Router();

/* Get home page  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Комплектующие ' });
});



/* Motherboard  */
router.get('/motherboard', function(req, res, next) {
  res.render ('hardviews', {title: 'Материнская плата', picture: 'images/motherboard.jpg', desc: 'Материнская плата'})
});

/* CPU  */
router.get('/CPU', function(req, res, next) {
  res.render ('hardviews', {title: 'Процессор', picture: 'images/CPU.jpg', desc: 'Процессор'})
});

/* Video card  */
router.get('/videocard', function(req, res, next) {
  res.render ('hardviews', {title: 'Видеокарта', picture: 'images/Videocard.jpg', desc: 'Видеокарта'})
});

/* Power supply  */
router.get('/powersupply', function(req, res, next) {
  res.render ('hardviews', {title: 'Блок питания', picture: 'images/Powersupply.jpg', desc: 'Блок питания'})
});

/* HDD  */
router.get('/HDD', function(req, res, next) {
  res.render ('hardviews', {title: 'HDD', picture: 'images/HDD.jpg', desc: 'Жёсткий диск'})
});

/* RAM  */
router.get('/RAM', function(req, res, next) {
  res.render ('hardviews', {title: 'ОЗУ', picture: 'images/RAM.jpg', desc: 'Оперативная память'})
});








module.exports = router;

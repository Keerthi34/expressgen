var express = require('express');
var router = express.Router();
var employee=require('../models/employee');
var request=require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login',function(req,res,next){

  //  res.send('Username: ' + req.body.Username);
    employee.findOne({
      Username: req.body.UserName
    },
    function(err,name){
      if(err)
      res.send(err);
      else {

        if(req.body.Password != name.Password){

         console.log("invalid user");
         res.render('invalid')
}
else {
  res.render('success');
}
    }



  });
 });

 router.get('/save',function(req,res){
var er=new employee({
  Username:req.query.user,
  Password:req.query.pass
})
er.save(function(err,sun){

  if(sun)
  res.send("saved")
  else {
    res.send(err);
  }
})

 })



 router.get('/retrieve', function(req, res, next) {
   res.render('retrieve', { title: 'Weather' });
 });

 router.post('/retrieve',function(req,res,next){
  var city = req.body.city;
  url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f0934a2defad938b153d37256b65a459";

  console.log(url)
  request.get(url, function (error, response, body) {
    var json = JSON.parse(body);
  console.log(json.main.temp);
  var report=json.main.temp;
  console.log(report);
  res.render('retrieve', {json:report});

  });

});

router.get('/wiki', function(req, res, next) {
  res.render('wiki');
});


router.post('/wiki', function(req, res, next) {
  var search=req.body.search;
  var url2="http://en.wikipedia.org/w/api.php?action=query&srsearch="+search+"&format=json&list=search";
  console.log(url2);
  request.get(url2,function(error,response,body){
    var json = JSON.parse(body);
  console.log(json.query.search[0].snippet);
  var report=json.query.search[0].snippet;
  console.log(report);
  res.render('wiki',{json:report});

});

});



router.get('/movie', function(req, res, next) {
  res.render('movie', { title: 'Weather' });
});

router.post('/movie', function(req, res, next) {
  var title=req.body.title;
  var mve="https://api.themoviedb.org/3/search/movie?query="+title+"&api_key=c7cbd5c5915a6a73e567c9c3fbd1a0f1";
  console.log(mve);
  request.get(mve,function(error,response,body){
    var json = JSON.parse(body);
  console.log(json.results[2].overview);
  var report=json.results[2].overview;
  console.log(report);
  res.render('movie',{json:report});

});

});

router.get('/bus', function(req, res, next) {
  var url="https://developer.goibibo.com/api/bus/seatmap/?app_id=07bc95a3&app_key=9771b768734c9e0656a00a196b8710bc&format=json&skey=vJ52KC0ymd0635qTD9bDDy9GHBkGl5FJMJjd0aBU_WgT0vEA5NoO9XHUgKaU_iClb2vn0uI4LrD6btAp";

  request.get(url,function(error,response,body){
  var json= JSON.parse(body);

  //console.log(json)

var report = json.data.onwardSeats;
  res.render('bus',{json:report});

});
});


router.get('/bus2', function(req, res, next) {
  var url1="https://developer.goibibo.com/api/bus/seatmap/?app_id=07bc95a3&app_key=9771b768734c9e0656a00a196b8710bc&format=json&skey=vJ52KC0ymd0635qTD9bDDy9GHBkGl5FJMJjd0aBU_WgT0vEA5NoO9XHUgKaU_iClb2vn0uI4LrD6btAp";
  console.log(url1);
  request.get(url1,function(error,response,body){
  var json= JSON.parse(body);



var report2=json.data.returnSeats;

  res.render('bus2',{json:report2})
});
});

router.get('/bus3', function(req, res, next) {
  var url2="https://developer.goibibo.com/api/bus/seatmap/?app_id=07bc95a3&app_key=9771b768734c9e0656a00a196b8710bc&format=json&skey=vJ52KC0ymd0635qTD9bDDy9GHBkGl5FJMJjd0aBU_WgT0vEA5NoO9XHUgKaU_iClb2vn0uI4LrD6btAp";
  console.log(url2);
  request.get(url2,function(error,response,body){
  var json= JSON.parse(body);



var report3=json.data.onwardBPs.GetBoardingPointsResult.list;

  res.render('bus3',{json:report3})
});
});

router.get('/modify', function(req, res, next) {

  //var url2="https://developer.goibibo.com/api/bus/seatmap/?app_id=07bc95a3&app_key=9771b768734c9e0656a00a196b8710bc&format=json&skey=vJ52KC0ymd0635qTD9bDDy9GHBkGl5FJMJjd0aBU_WgT0vEA5NoO9XHUgKaU_iClb2vn0uI4LrD6btAp";
  //console.log(url2);

  //request.get(url2,function(error,response,body){
  //var json= JSON.parse(body);

  //console.log(json)

//var report = json.data.onwardSeats[i];
  res.render('modify',{title:'Edit'});


});
//});


module.exports = router;

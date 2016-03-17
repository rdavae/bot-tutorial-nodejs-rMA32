var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexSalt = /^\/salt/;
      botRegexdebug = /^\/db/;
      botRegexDB = /^\/dog butt/;
      botRegexDM = /^\/fun fact/;
      botRegexWG = /^\/what a guy/;
      botRegexO = /^\/orgy/;
      botRegexyub = /^\/y u b/;
      botRegexj = /^\/joaje/;
      botRegexhelp = /^\/help/;
      botRegexbw = /^\/but wait/;
      botRegexla = /^\/liz approves/;
      botRegexbb = /^\/be better/;
      botRegextk = /^\/thug/;
      
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';

   if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
   else if(request.text && botRegexDB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/fJv4zO0.gif");
    this.res.end();
  } 
    else if(request.text && botRegexdebug.test(request.text)) {
    this.res.writeHead(200);
    postMessage(this.req.chunks[0]);
    this.res.end();
    
  } 
   else if(request.text && botRegexbb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/47cGgAH.png");
    this.res.end();
    
  } 
   else if(request.text && botRegextk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Iy4xgBF.jpg");
    this.res.end();
    
  } 
   else if(request.text && botRegexla.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/XtliRDG.png");
    this.res.end();
    
  } 
   else if(request.text && botRegexbw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/VkTNCWG.png");
    this.res.end();
    
  } 
   else if(request.text && botRegexhelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("i\'m fucking done with this shit. \r\n\/salt\/\r\n\/dog butt\/\r\n\/thug\/\r\n\/be better\/\r\n\/liz approves\/\r\n\/but wait\/\r\n/fun fact\/\r\n\/what a guy\/\r\n\/orgy\/\r\n\/y u b\/\r\n\/joaje\/\r\n\r\nall of these commands are case sensitive!\r\nstay safe, make good decisions, don\'t do drugs, and don\'t go to class!\r\n<3 raj\r\n      \r\n\r\n");
    this.res.end();
  } 
   else if(request.text && botRegexj.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Bq9o2U4.gif");
    this.res.end();
  } 
   else if(request.text && botRegexO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/JQn5ahz.jpg");
    this.res.end();
  } 
   else if(request.text && botRegexyub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/mwrurZc.jpg");
    this.res.end();
  } 
   else if(request.text && botRegexDM.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/BiQVX6N.jpg");
    this.res.end();
  } 
   else if(request.text && botRegexWG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("W H A T A G U Y\r\nH  H\r\nA     A\r\nT         T\r\nA           A\r\nG             G\r\nU                 U\r\nY                     Y");
    this.res.end();
  } 
  
 
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;

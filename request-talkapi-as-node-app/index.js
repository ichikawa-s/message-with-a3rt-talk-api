/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
/*
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});
*/

/* 3. GETアクセス時に呼ばれる */
/*
app.get("/", function(req, res, next){
    console.log("Http access now");
});
*/


/* 4. Node.jsからAPIエンドポイントにHTTPアクセスを飛ばす */
//requestをrequire
var request = require('request');

//ヘッダーを定義
var headers = {
  'Content-Type':'application/json'
}

//オプションを定義
var options = {
  url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
  method: 'POST',
  headers: headers,
  json: true,
  form: { "apikey" : "s9DxJCNnRgmzJBprDUUZrPLXgaY3dcEU",
          "query"  : "おはよう"
         }
}

//リクエスト送信
/*
request(options, function (error, response, body) {
  //コールバックで色々な処理
  console.log( response );
})
*/

var requestToTalkApi = function (req, res, next) {
	//talk apiにリクエスト送信
	request(options, function (error, response, body) {
	 	//コールバックで色々な処理
	 	
	 	// console.log(response);
	 	// res.data = response;
	 	res.talkapiresult = response; // expressのresのプロパティにrequestモジュールのアクセス結果を保持する
	 	next(); // next()はrequestのcallbackのなかでOK？
	})

};

app.use(requestToTalkApi);

app.get('/', function (req, res) {
  console.log("Http access now");
  var responseText = res.talkapiresult.body;
  // res.send(responseText);
  // JSON 応答を送信します
  res.json(responseText);
});

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

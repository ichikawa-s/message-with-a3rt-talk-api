/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

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

// talk apiにリクエストを送信する関数
var requestToTalkApi = function (req, res, next) {

	console.log('http access recieved !');
	
	//talk apiにリクエスト送信
	request(options, function (error, response, body) {
		//コールバックで色々な処理
		
		// console.log(response);
		// res.data = response;
		// res.locals.talkapiresult = response; // expressのresのプロパティにrequestモジュールのアクセス結果を保持する
		// next(); // 次の処理に進む
	
		var responseText = response.body;

		// 応答データをJSON形式で送信します
		res.json(responseText);
	})

};

// http://192.168.56.4:3000/ にアクセスしたときに呼ばれるroute メソッド
app.get('/', requestToTalkApi);

// ポート番号3000番で待ち受ける
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

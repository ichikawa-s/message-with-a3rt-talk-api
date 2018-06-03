# 第2部 Node.jsをWindowsで動かす

---

## ExpressでPOSTを受け付ける

* body-parserモジュールをインストールして依存関係リストに追加します

```CMD
npm install body-parser --save
```

* app.jsに以下を追記します

```node
// POSTされたデータを取り扱うためのモジュール
var bodyParser = require('body-parser')

// body-parserの設定
app.use(bodyParser.json()) // POSTされたデータをreq.bodyに入れてくれる
app.use(bodyParser.urlencoded({extended: true})); // 配列などのネストされた形式のJSONを許可

// talk apiにリクエストを送信する関数
var requestToTalkApi = function (req, res) {
	console.log('http access recieved !');
	console.log(req.body);
	res.json(req.body);
}

// http://localhost:3000/requestToTalkApi にアクセスしたときに呼ばれるroute メソッド
app.post('/requestToTalkApi', requestToTalkApi);
```

* PostmanでJSONを送ってみる
	* メソッドをPOSTに指定する
	* エンドポイントはhttp://localhost:3000/requestToTalkApi
	* Content-Typeをapplication/jsonにする
	* 次のようなJSONをBodyに書いてSendする
```JSON
{
    "test": "hello"
}
```

---

## Requestモジュールでtalk apiと通信する

* Requestモジュールをインストールして依存関係リストに追加します

```CMD
$ npm install request --save
```

* app.jsを以下のように編集します

```node
// Node.jsからPOSTするrequestモジュール
var request = require('request');

// talk apiにリクエストを送信する関数
var requestToTalkApi = function (req, res) {
	console.log('http access recieved !');
	console.log(req.body);
	// res.json(req.body);
	
	//オプションを定義
	var options = {
		url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
		json: true,
		form: req.body // パラメータを流用
	}

	//talk apiにリクエスト送信
	request(options, function (error, response, body) {

		// リクエスト成功時の処理
		console.log('response : ' + response);

		var responseText = response.body;

		// 応答データをJSON形式で送信します
		res.json(responseText);
	})	
}

// http://localhost:3000/requestToTalkApi にアクセスしたときに呼ばれるroute メソッド
app.post('/requestToTalkApi', requestToTalkApi);
```

* public/js/message.jsからのajaxのURLを以下に変更します
	* http://localhost:3000/requestToTalkApi

* 起動します

```CMD
$ node app.js
```

* ブラウザで [http://localhost:3000/index.html](http://localhost:3000/index.html) にアクセスします


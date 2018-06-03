# 第2部 Node.jsをWindowsで動かす

---

## ● Node.jsで動かす
* Node.jsとは
  * ノンブロッキングI/Oとイベントループ方式で少ないメモリでも大量のアクセスを処理することができる
  * サーバ側の処理をJavascriptで記述できるというメリットがある
---

## ● Node.jsをWindowsで動かす
* Windowsにインストールする

* 作業ディレクトリを作成
	* C:\Users\{ユーザ名}\nodework

* コマンドプロンプトを開く
	* スタートにcmdと入力する

* 作業ディレクトリに移動
	* cd C:\Users\{ユーザ名}\nodework

* Node.jsでプロジェクトを作成する
	* `$ npm init`
	* package name: talkapp
	* entry point: app.js
	* package.jsonが生成される

* app.jsというファイルを作成して以下を記述する
	* `console.log('Hello!');`

* 起動
	* `$ node app.js`

## Expressでサーバーを起動する

* Expressをインストール。
	* --saveを付けるとpackage.jsonの依存関係リストに追記されます

```CMD
$ npm install express --save
```

* 以下をapp.jsに記述します

```node	
/* expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

// ポート番号3000番で待ち受ける
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});
```

* 起動します

```CMD
$ node app.js
```

* `Node.js is listening to PORT:3000` と表示されればOKです

## Node.jsでクライアントサイドのファイルを提供する

第1部で作成したHTML,CSS,JavaScriptをExpressを使ってそのまま提供してみましょう

* コマンドプロンプトで CTRL + C を入力してnodeを停止します
* public フォルダを作成して第一部で作成したHTMLとJSとCSSを配置します
* 以下をapp.jsに記述します
	
```node
// publicフォルダ内の静的ファイルのHTTPアクセスを許可する
app.use('/', express.static('public'));
```

* 起動します

```CMD
$ node app.js
```

* ブラウザで [http://localhost:3000/index.html](http://localhost:3000/index.html) にアクセスします

---

[次のページ](CHPTER_2-2.md)

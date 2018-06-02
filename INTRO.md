# A3RT talk apiの紹介

* A3RT(アート)
	* A3RTは機械学習ソリューション活用の敷居を下げ、スピーディかつ低コストで施策への導入ができるよう設立されたAPI 群です
	* https://a3rt.recruit-tech.co.jp/about/
	* Talk APIはA3RTのAPI群の中のひとつです

## Talk API

* Talk APIはChatbotを作成するためのAPIです。
* https://a3rt.recruit-tech.co.jp/product/talkAPI/

* エンドポイント
	* URL：   https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk
	* メソッド：   POST 

* リクエストパラメータ
	* apikey:  API利用者を特定するキー情報
	* callback:  通信成功時に呼び出してもらう関数を指定できる(今回は使いません)
	* query:  送りたいメッセージ

* レスポンスフィールド
	* status: 	処理ステータス
	* message: 	メッセージ
	* results: 	結果(配列になっているため注意する)
		* perplexity: 	予測性能
		* reply: 	応答テキスト

## Postmanでtalk apiにメッセージを送ってみよう

### Postman - API Development Environment

* Postmanをダウンロードしてインストール
	* https://www.getpostman.com/
	* APIのキーは別途送付します


## 後ほど使用するソフトウェアをダウンロードする

* Node.js for Windows
	* https://nodejs.org/ja/download/
* VirtualBox
	* https://www.virtualbox.org/wiki/Downloads
* WinSCP
	* https://sourceforge.net/projects/winscp/
* TeraTerm
	* https://ja.osdn.net/projects/ttssh2/
* CentOS 7 ISO(サイズが大きいためダウンロードしたまま放置でOKです)
	* https://www.centos.org/download/

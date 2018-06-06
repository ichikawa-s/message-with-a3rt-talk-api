# A3RT talk apiの紹介

* A3RT(アート)
	* A3RTは機械学習ソリューション活用の敷居を下げ、スピーディかつ低コストで施策への導入ができるよう設立されたAPI 群です
	* [公式サイト a3rt.recruit-tech.co.jp/about](https://a3rt.recruit-tech.co.jp/about/)
	* Talk APIはA3RTのAPI群の中のひとつです

## Talk API

* Talk APIはChatbotを作成するためのAPIです。
	* [公式サイト a3rt.recruit-tech.co.jp/product/talkAPI](https://a3rt.recruit-tech.co.jp/product/talkAPI/)

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

* 作業ディレクトリを作成します
	* C:\Users\\{ユーザ名}\nodework

* ダウンロードしたファイルの置き場所をつくります
	* C:\Users\\{ユーザ名}\nodework\ソフトウェア

### Postman - API Development Environment

* Postmanをダウンロードしてインストール
	* [Postmanのページ](https://www.getpostman.com/)
	* APIのキーは別途送付します


## 後ほど使用するソフトウェア

インストーラファイルをダウンロードしておきましょう

* Node.js(Windows版)
	* [nodejs.org/ja/download/](https://nodejs.org/ja/download/)
* VirtualBox
	* [www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
* WinSCP
	* [sourceforge.net/projects/winscp/](https://sourceforge.net/projects/winscp/)
* TeraTerm
	* [ja.osdn.net/projects/ttssh2/](https://ja.osdn.net/projects/ttssh2/)
* CentOS 7 - DVD ISO
	* [www.centos.org/download/](https://www.centos.org/download/)
	* サイズが大きいためダウンロードしたまま放置でOKです

---

[アイスブレイクへ](ICEBREAK.md)

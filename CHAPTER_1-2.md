# 第1部 HtmlとCSSとJavaScriptでつくる

---

## トークアプリのベースとなるHTML
* HTML
  * index.html

```HTML
<!DOCTYPE html>
<html lang="ja">

<head>
<meta charset="utf-8"/>
<link rel="stylesheet" type="text/css" href="./css/ios-like-message.css">
<link rel="stylesheet" type="text/css" href="./css/form_botton.css">
</head>

<body>

	<header>
		<span> Talk api </span>
	</header>

	<div class="messages-wrapper">
		<div class="message to">This is my first text message on ios7 This is my first text message on ios7</div>
		<div class="message from">This is my second text message on ios7</div>
		<div class="message from">This is my third text message on ios7</div>
		<div class="message to">This is my fouth text message on ios7</div>
		<div class="message from">This is my fifth text message on ios7</div>
		<div class="message to">This is my sixth text message on ios7</div>
		<div class="message to">This is my seventh text message on ios7</div>
	</div>

	<div id="talkapp_send">
		<textarea id="talkapp_send_message"></textarea>
		<button id="talkapp_send_btn">送信</button>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="./js/message.js"></script>

</body>

</html>

```

* CSS
  * メッセージのCSS : ios-like-message.css
  * 入力フォームのCSS : form_botton.css

---

## JavaScriptの関数をつくる

* message.jsでTODOと記載されている３つの関数の中身を記述します

* ユーザーの入力したメッセージを取得する

```JavaScript
/**
 * TODO
 *
 * ユーザーの入力メッセージを取得する
 */
function getMessage() {
    // jQueryのセレクタでidを指定する
}
```

* ユーザーのメッセージをtalk apiに送信する

```JavaScript
/**
 * TODO
 *
 * ユーザーのメッセージをtalk apiに送信する
 */
function postMessage() {
    // jQueryを使ってメッセージを送信する
}
```

* talk-apiのメッセージをタイムラインに追加する

```JavaScript
/**
 * TODO
 *
 * talk-apiのメッセージをタイムラインに追加する
 */
function appendMessageFromTimeline( message ) {
    // jQueryのappend
}
```
# 第1部 HtmlとCSSとJavaScriptでつくる

---

* 作業フォルダの下に第1部の作業用フォルダを作成しましょう
	* C:\Users\\{ユーザ名}\nodework\第1部

---

## ● HTMLの基本構成

* テキストエディタでindex.htmlを作成します

```HTML
<!DOCTYPE html>

<html lang="ja">

<head>
    <meta charset="UTF-8"/>
    <title>talk apiと話そう</title>
</head>

<body>
    <h1>Hello. Let's talk.</h1>
    <textarea id='hello'>こんにちは</textarea>
</body>

</html>
```

---


## ● JavaScriptの代表的な関数

* setTimeout関数
  * 引数に関数を渡すイメージをつかむ

```HTML
<script>

  // ポップアップを表示する関数
  var popAlert = function() {
    alert( "呼んだ？" );
  };

  // 関数の引数に関数を渡す
  setTimeout( popAlert, 10 * 1000 );

</script>
```

### jQueryに慣れる
* jQueryの読み込み
```JavaScript
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
* DOM要素を操作する

```JavaScript
  // idを指定して値を取得する
  var hello = jQuery( '#hello' ).val();
  console.log( hello );
```

### サーバと通信する
  * メッセージをtalk apiに送る  
  * JQueryのajax関数でtalk apiにPOSTする

```JavaScript
var message = "おはよう";

$.ajax({
    type: "POST",
    url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
    data: {
            apikey: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", // ここは実際のキーに書き換えないと動きません
            query: message
          },
    success: function( data ) {
      // 通信成功時にsuccessプロパティに紐づけた関数が呼ばれる
      console.log( data.status );
      console.log( data.message );
      console.log( data.results );
    }
});

```

---

[次のページ](CHAPTER_1-2.md)

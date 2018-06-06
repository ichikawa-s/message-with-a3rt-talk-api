
### 再起動ボタンが表示されたら

* 再起動
* ライセンスに同意する

### CentOSのネットワーク設定

* CentOSにsguserでログイン
  * アプリケーション -> 端末

ネットワーク設定の確認

```
$ ip a
```

* IPアドレスが割り振られていないため下のように手動で設定します

```
$ nmtui
```
* 接続の編集
  * enp0n8
  * ipv4設定 -> 手作業
  * アドレス : 192.168.56.101/24
  * ipv6設定 -> 無視する
  * 自動的に接続する

* 接続をアクティベートする
  * enp0n8

ネットワーク設定の確認

```
$ ip a
```

* enp0n8 にIPアドレス192.168.56.101が割り振られていることを確認

* 参考
    * https://qiita.com/s9910553/items/b156a341178df33466a9

### Tera TermでSSH接続

* 接続先ホスト
  * ip a で確認したIPアドレスにSSH接続します
  * sguser@192.168.56.xxx
  
### sudo コマンドでパスワードの入力を不要にする

rootユーザに切り替え
```
$ su -
  rootのパスワードを入力
```
```
$ visudo
```

* 次のようにsguserの行を追加して保存

```
## Same thing without a password
# %wheel        ALL=(ALL)       NOPASSWD: ALL
sguser  ALL=(ALL)       NOPASSWD: ALL
```

* vi の使い方
  * i で入力モード
  * テキストを編集する
  * Esc で入力モード終了
  * :wq で保存

* exit でsguserに戻る

---

## ● SSHでCentOSに接続してデプロイ

* CentOSにNode.jsをインストールする
  * yumリポジトリの追加

```
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
```

* Node.jsのインストール
```
$ yum install -y gcc-c++ make
$ sudo yum install -y nodejs
$ node -v
```

プロジェクトのディレクトリを作成する

```
mkdir -p /home/sguser/nodework/talkapp
```

WinSCPでソースコードを配置する

* node_modules以外のファイルを以下に配置します


```

├── app.js
├── package-lock.json
├── package.json
└── public
    ├── css
    │   ├── form_botton.css
    │   └── ios-like-message.css
    ├── index.html
    └── js
        └── message.js
```

依存関係リストをインストール
```
$ npm install
```

起動
```
$ node app.js
```

* CentOS内のFireFoxを開く
  * localhost:3000にアクセスして表示されること

* 3000番ポートを開放する
  * firewallコマンド
  * sudo firewall-cmd --add-port=3000/tcp --zone=public --permanent
  * sudo firewall-cmd --reload

* message.js のajaxの送信先URLを修正
  * url: "http://" + location.host + "/requestToTalkApi"
  
---

ここまで終わってしまってまだ時間がある人は・・・

[次のページ](CHAPTER_3-3.md)

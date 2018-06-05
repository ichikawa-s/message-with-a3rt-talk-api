## ● Node.jsをCentOSで動かす

* CentOSについて
  * CentOS（セントオーエス）は、Red Hat Enterprise Linuxとの完全互換を目指したフリーのLinuxディストリビューションです
  * Red Hat は業務用のサーバでよく使用されます
  * Red Hat は有料です
  * そのため自宅のマシンやテスト環境にサーバを構築したいときにCentOSが利用されます

* VirtualBoxについて
  * 仮想マシンを管理するソフトウェアです
  * たとえば、Windowsの上で仮想マシンとしてLinuxを動かすことができます

* VirtualBoxをインストール
  * VirtualBox-5.2.12-122591-Win.exe

* グローバルツールでホストオンリーアダプターを確認
  * アダプター: アダプターを手動で設定
    * IPv4 アドレス: 192.168.56.1
    * IPv4 ネットマスク: 255.255.255.0
  * DHCPサーバー : 使用しない
    * サーバーを有効化にチェックを入れない

* CentOSのVMイメージをISOから作成する
  * VirtualBoxで新規 -> タイプ:Linux, バージョン:Red Hat(64bit)を選択
  * メモリ2048MB
  * 設定 -> ネットワーク
    * -> アダプター2 -> ネットワークアダプターを有効化, 
    * 割り当て:ホストオンリーアダプター
  * 設定 -> ストレージ ->
    * コントローラ:空 -> 仮想光学ディスクドライブを選択
    * -> CentOS-7-x86_64-DVD-1804.iso を選択
  * 起動 -> Install CentOS 7
    * ソフトウェアの選択
      * ベース環境:GNOME Desktop 
      * 選択した環境のアドオン:開発者ツール
    * システム : インストール先 -> 完了
    * rootのパスワード: sguser
    * ユーザsguserのパスワード: sguser
    * 再起動
    * ライセンスに同意する
    * ネットワーク: enp0n8 をオンにします

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
  * sudoだと失敗するためもう一度rootに
```
$ su -
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
$ exit
```

* Node.jsのインストール
```
$ yum install -y gcc-c++ make
$ sudo yum install -y nodejs
$ node -v
```

* WinSCPでソースコードを配置する
  * node_modules以外のファイルを以下に配置

```
mkdir -p /home/sguser/nodework/talkapp

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

[次のページ](CHAPTER_3-2.md)

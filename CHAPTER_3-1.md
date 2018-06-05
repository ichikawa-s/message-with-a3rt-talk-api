## 第3部 Node.jsをCentOSで動かす

### CentOSについて
* CentOS（セントオーエス）は、Red Hat Enterprise Linuxとの完全互換を目指したフリーのLinuxディストリビューションです
  * [www.centos.org](https://www.centos.org/)
* Red Hat は業務用のサーバでよく使用されるLinuxです
* Red Hat は有料です
* そのため自宅のマシンやテスト環境にサーバを構築したいときにCentOSが利用されます

### VirtualBoxについて
* 仮想マシンを管理するソフトウェアです
* たとえば、Windowsの上で仮想マシンとしてLinuxを動かすことができます

---

### VirtualBoxをインストール
* VirtualBox-5.2.12-122591-Win.exe

### VirtualBoxの設定
* グローバルツールでホストオンリーアダプターを確認

* アダプター: 「アダプターを手動で設定」にチェック
  * IPv4 アドレス: 192.168.56.1
  * IPv4 ネットマスク: 255.255.255.0

* DHCPサーバー : 使用しない
  * サーバーを有効化にチェックを入れない

---

### CentOSのVMイメージをISOから作成する
* VirtualBoxで新規 -> タイプ:Linux, バージョン:Red Hat(64bit)を選択
* メモリ2048MB
* 設定 -> ネットワーク
  * アダプター2 -> ネットワークアダプターを有効化, 
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

ここまでやったら再起動ボタンが表示されるまで放置します

[次のページ](CHAPTER_3-2.md)

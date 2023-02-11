# curriculum-textlint

curriculum-textlint はスタイルガイドの遵守状況を執筆者自らが簡潔にチェック・修正できるツールとして[textlint](https://github.com/textlint/textlint)をベースに TechPit のスタイルガイドの一部をルール化した校正ツールです。

## textlint のルールについて

基本的な textlint のルールに関しては、技術書向けの textlint ルールプリセット[textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)を採用しています。厳しすぎるルールや足りないルールがあれば slack やメールでお気軽にご連絡していただけると幸いです。

Textlint でルール化されているスタイルガイドの内容一覧は、このドキュメントの末尾に記載しています。

## (注意点)教材は curriculum ディレクトリ内に作成してください

このリポジトリで設定している textlint は curriculum ディレクトリ内のマークダウンファイルを対象としています。
なので、教材は curriculum ディレクトリ内で作成してください。

## textlint のセットアップ方法

### 1. 教材リポジトリのルートディレクトリにサブモジュールを追加する

以下コマンドを教材リポジトリのルートディレクトリで実行して、Git サブモジュールを追加してください。

```console
git submodule add git@github.com:Techpit-Market/curriculum-textlint.git
```

### 2. ルートディレクトリに package.json を追加する

教材リポジトリのルートディレクトリで`package.json`ファイルを追加して以下のコードを追記してください。

```json
{
  "scripts": {
    "postinstall": "npm run update:submodule",
    "postupdate": "npm run update:submodule",
    "update:submodule": "git submodule update --init && git submodule foreach git pull origin master && cd curriculum-textlint && npm install",
    "check": "cd curriculum-textlint && npm run check",
    "check:fix": "cd curriculum-textlint && npm run check:fix",
    "gen-report": "cd curriculum-textlint && npm run gen-report"
  }
}
```

### 3. パッケージのインストール

以下のコマンドを教材リポジトリのルートディレクトリで実行してインストールを行っていください。

```console
npm install
```

以上で準備は完了です。

## 使用方法

教材リポジトリのルートディレクトリでコマンドを実行して結果の確認を行います。

```console
npm run check
```

`check:chap --chapter=<章番号>`で任意の章のみに対して実行できます。
```console
npm run check:chap --chapter=1
```

### 機械的に修正可能な箇所の自動修正

機械的に修正可能な箇所は、次のコマンドを実行することで自動的に修正されます。

```console
npm run check:fix
```

### HTML 形式でレポートを出力する

次のコマンドを実行すると、textlint の結果を HTML ファイルに出力することができます。

```
npm run gen-report
```

上記コマンドの実行結果に HTML ファイルのパスが表示されるので、該当ファイルをお好きなブラウザで開いてください。
以下のような結果が表示されます。
![ ](https://user-images.githubusercontent.com/9666372/154825357-bbfd913e-4fca-43a1-83a4-c5f9d8a01cef.png)

## TechPit オリジナルのルール一覧

| ルール名                   | 概説                                                      | スタイルガイド                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `codeblock-modify-comment` | コードブロックに追加や変更の指示があるか確認します        | [4-4 実装箇所の説明のフォーマット > コードを貼り付ける](https://techpit-market.gitbook.io/host-guide/4/4-4#4-kdoworikeru)                                         |
| `do-not-use-h4`            | h4 以降の見出しを使用していないか確認します               | [4-8 見やすい文章を書くためのマークダウンの書き方 > 見出しの使い方](https://techpit-market.gitbook.io/host-guide/4/markdown#shiniunohah2toh3dakedeh4toshiteimasu) |
| `over-10000words`          | 1 ページの分量が 10000 字を大きく超えていないか確認します | [4-10 執筆におけるアンチパターン > 分かりにくい教材の構成やパターン](https://techpit-market.gitbook.io/host-guide/4/4-10#karinikuinoyapatn)                       |
| `write-end-comment`        | パートの最後がコードや画像で終わっていないか確認します    | [4-3 セクション 1 以降を執筆する > パートの最後の一言](https://techpit-market.gitbook.io/host-guide/4/4-3#ptonono)                                                |

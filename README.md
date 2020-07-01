# curriculum-textlint
curriculum-textlintは校正コストを軽減するために[textlint](https://github.com/textlint/textlint)を導入するためのリポジトリです。


## textlintのルールについて
textlintのルールに関しては、技術書向けのtextlintルールプリセット[textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)を採用しています。厳しすぎるルールや足りないルールがあればslackやメールでお気軽にご連絡していただけると幸いです。


## textlintのセットアップ方法

textlint-rule-preset-techpit-curriculum はまだ npm に publish されていないため、Gitリポジトリの指定でインストールが可能です。
Gitリポジトリは次のとおり： `takayukioda/textlint-rule-preset-techpit-curriculum#master`

```shell
npm install --save-dev textlint takayukioda/textlint-rule-preset-techpit-curriculum#master
```

### 2. ルートディレクトリの package.json に次の設定を追加してください

package.jsonがルートディレクトリにある場合は以下の設定を追加してください。

```json
{
  "scripts": {
    "check": "textlint ./curriculum/",
    "check:fix": "textlint --fix ./curriculum/"
  }
}
```

package.jsonファイルがルートディレクトにない場合は、次のコマンドを実行してから、上記の設定をpackage.jsonファイルに追記してください。

```shell
# package.json をテンプレートに沿って生成
npm init -y
```

### 3. コマンドラインでtextlintを実行する

```
npm run check

# 機械的に修正可能な箇所を修正する場合は次のコマンドを実行する
npm run check:fix
```

以上でtextlintを使ってカリキュラムを校正ができます。

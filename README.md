# curriculum-textlint
curriculum-textlintは校正コストを軽減するために[textlint](https://github.com/textlint/textlint)を導入するためのリポジトリです。


## textlintのルールについて
textlintのルールに関しては、技術書向けのtextlintルールプリセット[textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing)を採用しています。厳しすぎるルールや足りないルールがあればslackやメールでお気軽にご連絡していただけると幸いです。


## (注意点)教材はcurriculumディレクトリ内に作成してください
このリポジトリで設定しているtextlintはcurriculumディレクトリ内のマークダウンファイルを対象としています。
なので、教材はcurriculumディレクトリ内で作成してください。


## textlintのセットアップ方法

### 1. カリキュラムのルートディレクトリにサブモジュールを追加する
Gitサブモジュールを追加してください。

```
$ git submodule add git@github.com:Techpit-Market/curriculum-textlint.git
```

### 2. ルートディレクトリの package.json に次のスクリプトを追加してください

package.jsonがルートディレクトリにある場合は以下のコードを追加してください。package.jsonファイルがルートディレクトにない場合は、package.jsonファイルを追加して以下のコードを追記してください。

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

### 3. コマンドラインでtextlintを実行する

```
npm install
npm run check

# 機械的に修正可能な箇所を修正する場合は次のコマンドを実行する
npm run check:fix

# HTML形式でレポートを出力する
npm run gen-report
```

以上でtextlintを使ってカリキュラムを校正ができます。

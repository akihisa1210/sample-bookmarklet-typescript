# sample-bookmarklet-typescript

TypeScript でブックマークレットを作成するサンプル。  
npm コマンドでソースコードのビルド・ミニファイと、コード先頭への `javascript:` の付与を行うことができる。  
ビルドとミニファイには [Parcel](https://parceljs.org/) を使用している。

## Build
```
npm run build
npm run build:bookmarklet
// ブックマークレット用に変換されたコード dist/index.bookmarklet.js を生成する。 
```

## サンプルブックマークレットの内容
ブックマークレットを実行するとポップアップが開く。  
ポップアップに名前を入力すると、あなたのための禅のフレーズが表示されるぞ！  
（このブックマークレットはホスト名が example.com であるページ上でのみ使用可能。）

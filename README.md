# SOLO MVP PROJECT

**このリポジトリはCode Chrysalisの生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）**

# Search Ur Vehicle

![ロゴ](./public/logo.jpg)

## About

車の全長・全高・全幅・価格を比較できるアプリを作りました。<br>
[こちらから使用できます。](https://mvp-soloproject-frontend.vercel.app/)<br>
フロントエンドは[こちらのリポジトリ](https://github.com/SoshiK/MVPSoloproject-frontend)です。<br>

## API

``` GET /api/cars ```<br>
DBに入っているすべての車の情報を取得します。

``` GET /api/:order ```<br>
DBに入っているすべての車の情報をorderで渡されたパラメータの昇順にソートされた情報を取得します。

``` GET /api/cars/selected/:maker ```<br>
DBに入っている車の情報で、与えられたメーカーの車のみを取得します。

``` GET /api/makers ```<br>
DBに入っているメーカーのすべての情報を取得します。

``` POST /api/cars ```<br>
新しい車の情報をDBに追加します。

## Setting

- 依存関係をインストール

    ``` npm install``` または ```yarn install ```を実施。

-  DBを接続
-  テーブル、初期データの作成

    ```npm run migrate``` または　```yarn migrate```でテーブルを作成。<br>
    dataフォルダに移動して、```node import```で初期データをテーブルに作成できます。

- サーバー起動

    ```npm run start```または```yarn start```でサーバーが起動できます。
    localhost:9000にアクセスすることで、APIが使えます。

## Technology Used

- Express.js
- PostgreSQL
- knex.js
- heroku

## Future features

- [] PATCH, DELETEメソッドの追加

### Link
<div>ロゴは <a href="https://www.designevo.com/jp/logo-maker/" title="無料オンラインロゴメーカー">DesignEvo</a> ロゴメーカーさんに作られる</div>
# 長野県 非公式 新型コロナウイルス感染症対策サイト

![](https://github.com/Stop-COVID19-Nagano/covid19/workflows/production%20deploy/badge.svg)

[長野県 非公式 新型コロナウイルス感染症対策サイト](https://nagano.stopcovid19.jp/)
[![長野県 非公式 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/941125/76682913-4e41d280-6643-11ea-91a4-c2e2b53650fc.png)](https://nagano.stopcovid19.jp/)


### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md)

## コミュニケーションへの参加方法

### 長野県版

本プロジェクトのメインのコミュニケーションの場

* Facebook グループの[長野県版 COVID-19 対策サイト をつくろう](https://www.facebook.com/groups/155315052273089/)にご参加ください
* Facebook のアカウントを持っていない場合、`新規アカウントを作成 `から登録もしくは、[Facebookに登録](https://ja-jp.facebook.com/r.php)から登録してください

### 地域版

東京都以外の全国地域のプロジェクトについてのコミュニケーションの場
* Code for Japan の Slack アカウントを持っていない場合、[こちらから登録](https://cfjslackin.herokuapp.com/)してください
* `#stopcovid19jp` チャンネルにご参加ください。

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## このサイトから派生したサイト

[Link先](./forkedSites.md)を御覧ください。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 14.16.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://nagano.stopcovid19.jp/ が更新されます。

~~ `staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-nagano.netlify.com/ が更新されます。 ~~

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-nagano.netlify.com/ が更新されます。

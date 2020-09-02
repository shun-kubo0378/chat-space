# README

<h1 align="center">チャットアプリケーション</h1>

- TECH::CAMPのカリキュラムに沿って作成
　![top_page](https://gyazo.com/e3a2b2b3339037578eb9b676abc73bce/raw)

## バージョン
ruby 2.6.5

rails 6.0.0

## :paperclip: 主な使用言語
<a><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="70px;" /></a> <!-- rubyのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774548-731b2900-2fb4-11ea-99ba-565546c5acb4.png" height="60px;" /></a> <!-- RubyOnRailsのロゴ -->
<a><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="60px;" /></a> <!-- Hamlのロゴ -->
<a><<img src="https://user-images.githubusercontent.com/39142850/71774644-115bbe80-2fb6-11ea-822c-568eabde5228.png" height="60px" /></a> <!-- Scssのロゴ -->

## 実装機能
- 新規登録機能
- グループ内でのチャット機能
- 複数人によるグループチャット機能
- チャット相手の検索機能
- チャットグループへのユーザー招待機能
- チャットの履歴表示機能
- 画像送信機能
- チャットの自動更新


# :page_facing_up: DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

## Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

## Association
- has_many :member
- has_many :groups_users
- has_many :users, through: :groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group



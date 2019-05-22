# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null:false|

##messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|body|string|
|image|string|
|group_id|integer|null: false, foreign_key: true|

##group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

##groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association

## users
- has_many :messages
- has_many :group_users
- has_many :groups, through :group_users

## messages
- belongs_to :users
- belongs_to :group

## group_users
- belongs_to :user
- belongs_to :group

## group
- has_many :users, through :group_users
- has_many :messages
- has_many :group_users
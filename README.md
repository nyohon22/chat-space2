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
|name|integer|null: false, foreign_key: true|
|email|text|null:false|

##messagesテーブル
|Column|Type|Options|
|------|----|-------|
|users|integer|null: false, foreign_key: true|
|body|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|

##group_membersテーブル
|Column|Type|Options|
|------|----|-------|
|users|integer|null: false, foreign_key: true|

##groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|

### Association

## users
- has_many :messages
- has_many :group_members
- has_many :groups, through :group_members

## messages
- belongs_to :users
- belongs_to :group

## group_members
- belongs_to :user
- belongs_to :group

## group
- has_many :users, through :group_members
- has_many :messages
- has_many :group_members
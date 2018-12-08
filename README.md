## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|     |
|email|string|     |
|password|string|     |

### Association
- has_many :members
- has_many :messages


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|     |
|image|text|       |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|      |

### Association
- belongs_to :group
- belongs_to :user


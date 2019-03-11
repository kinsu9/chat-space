## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
deviseでカラムが追加されるのでnameだけで大丈夫だと思いますが念の為

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|     |
|image|text|       |
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

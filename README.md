## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|refarences|null: false, foreign_key: true|
|group_id|refarences|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## usersテーブル
deviseでカラムが追加されるのでnameだけで大丈夫だと思いますが念の為

|Column|Type|Options|
|------|----|-------|
|name|string|index: true|
|email|string|     |
|password|string|     |

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|     |
|image|text|       |
|user_id|refarences|null: false, foreign_key: true|
|group_id|refarences|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members


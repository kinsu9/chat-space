## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


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
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|  |

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|refarence|null: false, foreign_key: true|
|group_id|refarence|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## usersテーブル
deviceでカラム追加されるのでnameだけで大丈夫だと思いますが念の為

|Column|Type|Options|
|------|----|-------|
|name|string|     |
|email|string|     |
|password|string|     |

### Association
- has_many :members
- has_many :groups, :throug => :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|     |
|image|text|       |
|user_id|refarence|null: false, foreign_key: true|
|group_id|refarence|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|      |

### Association
- belongs_to :members
- belongs_to :users, :throug => :members


json.array! @new_messages do |message|
  json.id         message.id
  json.text       message.content
  json.image      message.image.url
  json.time       message.created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name  message.user.name
end

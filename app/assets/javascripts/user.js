$(function() {
  function appendUserName(user) {
    const html = `<div class="chat-group-user clearfix addmember">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }"  data-user-name="${ user.name }">追加</a>
                </div>`
    search_list.append(html);
  }

  function appendNoUser(message){
    const html = `<div class="chat-group-user clearfix addmember">
                  <p class="chat-group-user__name">${message}</p>
                </div>`
    search_list.append(html);
  }

  function selectUserName(user_id, user_name) {
    const remove_html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                        <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
                        <p class='chat-group-user__name'>${ user_name }</p>
                        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                       </div>`
    select_list.append(remove_html);
  }

  const search_list = $("#user-search-result");
  const select_list = $("#chat-group-users");

  $("#user-search-field").on("keyup", function(e){
    e.preventDefault();
    const input = $("#user-search-field").val();  //入力内容を取得
    if (input.length == 0) {
      search_list.empty();　//空判定
      return
    };
    $.ajax({
      type: 'GET',
      url:  '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) { //(users)は即時関数 = サーバーから返されたデータが入っている。index.json.jbuilderのデータ
      search_list.empty();
      if(users.length !== 0){
        users.forEach(function(user){
          appendUserName(user);
        });
      } else {
        appendNoUser('一致するユーザーが見つかりません');
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    })
  });

  $(document).on("click", ".user-search-add", function(){
    const user_name = $(this).attr("data-user-name");
    const user_id   = $(this).attr("data-user-id");
    selectUserName(user_id, user_name);
    $(this).parent().remove();
  })
  $(document).on("click", ".user-search-remove", function(){
    $(this).parent().remove();
  })
});

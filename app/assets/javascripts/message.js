$(function() {
  //HTML作成
  function buildHTML(message) {
    const image = (message.image)? `<image class= "lower-message__image" src = "${message.image}">` : "" ;
    const html = `<div class="message" data-id = "${message.id}">
                  <div class = "upper-message">
                    <p class = "upper-message__user-name">${ message.user_name }</p>
                    <p class = "upper-message__date">${ message.time }</p>
                  </div>
                  <div class = "lower-message">${ message.text }</div>
                  ${image}
                </div>`;
    return html;
  }

  //メッセージ送信の非同期
  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    const formData =  new FormData(this);
    const href = $(this).attr('action');
    $('.submit-btn').removeAttr('data-disable-with');
    $.ajax({
      url: href, //アクセス先のパス
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      const html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.messages').animate({
        scrollTop: $('.messages')[0].scrollHeight
      }, 'fast');
    })
    .fail(function(){
      alert('メッセージを入力してください');
    });
  });

  //自動更新
  const interval = setInterval(function() {
    if (location.href.match(/\/groups\/\d+\/messages/)) {
      $('.messages').animate({
        scrollTop: $('.messages')[0].scrollHeight
      }, 'fast');
      const latest_id = $('.message').last().data('id');
      const href = 'api/messages'
      $.ajax({
        url: href,
        type: 'GET',
        data: {id: latest_id,},
        dataType: 'json'
      })
      .done(function(newMessages) {
        newMessages.forEach(function(message) {
          const insertHTML = buildHTML(message)
          $('.messages').append(insertHTML)
          $('.messages').animate({
            scrollTop: $('.messages')[0].scrollHeight
          }, 'fast');
        })
      })
      .fail(function(){
        alert('自動更新に失敗しました')
      });
    } else {
      clearInterval(interval);
      }
  } , 5000);
})

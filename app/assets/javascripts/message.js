$(function(){
  function buildHTML(message){
    var html = `<div class="message">
                  <div class = "upper-message">
                    <p class = "upper-message__user-name">
                      ${ message.user_name }
                    </p>
                    <p class = "upper-message__date">
                      ${ message.time }
                    </p>
                  </div>
                  <div class = "lower-message">
                    <p class="lower-message__content">
                      ${ message.text }
                    </p>
                  </div>
                </div>`;
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData =  new FormData(this);
    var href = $(this).attr('action');
    $.ajax({
      url: href, //アクセス先のパス
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.input-box__text').val('');
      $('.submit-btn').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('メッセージを入力してください');
    });
  });
});

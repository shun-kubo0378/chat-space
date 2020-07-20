$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
      `<div class="message__box" data-message-id=${message.id}>
          <div class="message__box__info">
            <div class="message__box__info__user-name">
              ${message.user_name}
            </div>
            <div class="message__box__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__box__content">
            <p class="message__box__content-message">
              ${message.content}
            </p>
            <img class="message__box__content-image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message__box" data-message-id=${message.id}>
        <div class="message__box__info">
          <div class="message__box__info__user-name">
            ${message.user_name}
          </div>
          <div class="message__box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message__box__content">
          <p class="message__box__content-message">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };   
  }
    
  $('.new_message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    
    $.ajax ({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      let html = buildHTML(data);
      $('.message').append(html);    
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});  
      $('form')[0].reset();
      $('.submit-btn').removeAttr('disabled')
    })

    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});
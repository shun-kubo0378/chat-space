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

  let reloadMessages = function() {
    let last_message_id = $('.message__box:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.message').append(insertHTML);
        $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});
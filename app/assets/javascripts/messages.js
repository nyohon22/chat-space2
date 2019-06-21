$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.comment }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message" data-id="${message.id}">
                  <div class="message__detail">
                    <p class="message__detail__current-user-name">
                      ${message.user_name}
                    </p>
                    <p class="message__detail__date">
                      ${message.date}
                    </p>
                  </div>
                  <p class="message_body">
                    <div>
                    ${content}
                    </div>
                    ${img}
                  </p>
                </div>`
    return html;
  }

  $("#new_message").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
        var html = buildHTML(data);
        $('#message').append(html);
        $('#new_message')[0].reset();
        $('.form__submit').prop("disabled", false);
        $('.timeline__body').animate({scrollTop: $(".timeline__body")[0].scrollHeight }, 'fast');
        scroll();
    })
    .fail(function(){
      alert('エラーが発生しました。入力内容をご確認ください。');
    })
  });

  function reloadMessages(){
    var last_message_id = $('.timeline__bodyList').last().data('id');
    var href = 'api/messages'
    $.ajax({
    url: href,
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id},
    })

    .done(function(messages){
      messages.forEach(function(message){
        var insertHTML = buildHTML(message)
        $('#message').append(insertHTML)
      });
      $('.timeline__body').animate({scrollTop: $('.timeline__body')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
    });
  };
  setInterval(reloadMessages, 5000);
});


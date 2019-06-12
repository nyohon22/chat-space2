$(function(){
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = formData(this);
    var url = $(this).attr('action')
    $.ajax{
      url: url,
      type: "POST"
      data: formData,
      dataType: 'json'
      process
    }
  })
});
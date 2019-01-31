$(document).ready(function(){
  $('.content .element').click(function (e) {
    var title = $(this).find('.title').text();
    var body = $(this).find('.body').text();
    var amount = $(this).find('.amount').text();
    var img = $(this).find('img').attr('src');

    $('.modal-container .element .title').text(title);
    $('.modal-container .element .body').text(body);
    $('.modal-container .element .amount').text(amount);
    $('.modal-container .element img').attr('src',img);

    $('.modal-wrapper').addClass('active');
  })

  $('.modal-container .close').click(function (e) {
    $('.modal-wrapper').removeClass('active');
  })

  $('.modal-wrapper').click(function (e) {
    if($(e.target).closest('.modal-container').length == 0){
      $('.modal-wrapper').removeClass('active');
    }
  })
});

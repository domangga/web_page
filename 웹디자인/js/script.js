$('#title > li').mouseover(function(){
    $('.subtitle').css({left:'200px',opacity: '1',zIndex: '1'});
  }).mouseout(function(){
    $('.subtitle').css({left:'-100px',opacity: '0',zIndex: '-1'});
  });
  $('#title2 > li').mouseover(function(){
    $('.subtitle').css({left:'200px',opacity: '1',zIndex: '1'});
  }).mouseout(function(){
    $('.subtitle').css({left:'-100px',opacity: '0',zIndex: '-1'});
  });

$('.circle4').click(function(){
  $('.menu').css({left:'0px',opacity: '1',zIndex: '1'});
})
$('.circle4').click(function(){
  $(".bg").fadeIn(); //기본 fadeIn 메소드
  $(".bg").fadeIn("slow"); // fadeIn slow 적용
  $(".bg").fadeIn(6000); // 시간설정 6초
})
$('.cbtn').click(function(){
  $(".cbtn").fadeOut(); //기본 fadeIn 메소드
  $(".cbtn").fadeOut("slow"); // fadeIn slow 적용
  $(".cbtn").fadeOut(6000); // 시간설정 6초
})
$('.circle4').click(function(){
  $(".cbtn").fadeIn(); //기본 fadeIn 메소드
  $(".cbtn").fadeIn("slow"); // fadeIn slow 적용
  $(".cbtn").fadeIn(6000); // 시간설정 6초
})
$('.cbtn').click(function(){
  $('.menu').css({left:'-600px',opacity: '0',zIndex: '-1'});
})
$('.cbtn').click(function(){
  $(".bg").fadeOut(); //기본 fadeIn 메소드
  $(".bg").fadeOut("slow"); // fadeIn slow 적용
  $(".bg").fadeOut(6000); // 시간설정 6초
})


$('.m3').mouseover(function(){
  $(this).find('.submenu1').stop().slideDown()
}).mouseout(function(){
  $(this).find('.submenu1').stop().slideUp()

});
$('.m4').mouseover(function(){
  $(this).find('.submenu2').stop().slideDown()
}).mouseout(function(){
  $(this).find('.submenu2').stop().slideUp()

});  


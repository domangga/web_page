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

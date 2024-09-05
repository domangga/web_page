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
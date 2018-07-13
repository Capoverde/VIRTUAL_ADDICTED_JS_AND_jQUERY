$(function(){
    const top = $('#top');
    top.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
  });
  
  }); // <<------- END OF MAIN FUNCTION HERE -------- //
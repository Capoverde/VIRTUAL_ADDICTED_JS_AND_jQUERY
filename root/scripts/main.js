$(function(){
    const top = $('#top');
    top.on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
  });
  
  }); // <<------- END OF MAIN FUNCTION HERE -------- //

  let item = document.querySelectorAll('.item');
  console.log(item);
  function Redborder(e){
      e.preventDefault();
  item.forEach(item => {
      classList.add('_redBorder');
      
  });
  };
 
  item.addEventListener('click', Redborder);
var clickCount = 0;
$('.box').click(function(){
  clickCount++;
  if(clickCount == 1)
    first();
  else{
    second();
    clickCount = 0;
  }
});

function first(){
  console.log('1 ')

     $('.line1').css({
     'transform': 'rotate(135deg)',           'margin-top': '10%',
     'content': '""',
     'transition': '0.6s',
  })
  $('.line2').css({
    'background-color': 'transparent',
     'transition': '0.4s',
  })
   $('.line3').css({
     'content': '""',
    'transform': 'rotate(-135deg)',
    'margin-top': '-10%',
   'transition': '0.6s',
  })
   $('.menu').css({
     'transform': 'translateX(0%)',
    'position':'absolute', 
     'transition': 'all .7s',
     
  })

  
}
  
function second(){
  console.log('2 ')

     $('.line1').css({
     'transform': 'rotate(0deg)', 
     'margin-top': '10%',
     'content': '""',
     'transition': '0.6s',
      'width': '45px',
    'height': '8px',
    'top': '10px',
    'left': '27.5px',
    'margin-top': '1px',
  })
  $('.line2').css({
    'background-color': 'rgba(0, 0, 0, 0.596)',
     'transition': '0.4s',
     'width': '45px',
    'height': '8px',
     'display': 'block',
     'top': '20px',
    'left': '27.5px',
      'margin-top': '2px',
  })
   $('.line3').css({
     'content': '""',
    'transform': 'rotate(0deg)',
    'margin-top': '-10%',
   'transition': '0.6s',
      'width': '45px',
    'height': '8px',
    'top': '30px',
    'left': '27.5px',
      'margin-top': '3px',
  })
  $('.menu').css({
     'transform': 'translateX(-1000%)',
    'position':'absolute', 
     'transition': 'all .7s',
    'z-index': '9',
  })
   $('.box').css({
      'border': 'none',
     'border-radius':'0',
     'z-index': '10',
  })
  }



 $('.menu').click(function(){
   clickCount = 0;
  console.log('3 ')
    $('.menu').css('transform',  'translateX(-1000%)');
   $('.line1').css({
     'transform': 'rotate(0deg)', 
     'margin-top': '10%',
     'content': '""',
     'transition': '0.6s',
      'width': '45px',
    'height': '8px',
    'top': '10px',
    'left': '27.5px',
    'margin-top': '1px',
  })
  $('.line2').css({
    'background-color': 'rgba(0, 0, 0, 0.596)',
     'transition': '0.4s',
     'width': '45px',
    'height': '8px',
     'display': 'block',
     'top': '20px',
    'left': '27.5px',
      'margin-top': '2px',
  })
   $('.line3').css({
     'content': '""',
    'transform': 'rotate(0deg)',
    'margin-top': '-10%',
   'transition': '0.6s',
      'width': '45px',
    'height': '8px',
    'top': '30px',
    'left': '27.5px',
      'margin-top': '3px',
  })
   $('.box').css({
      'border': 'none',
     'border-radius':'0',
     'z-index': '10',
  })
 });



    // //для анимаций при скроллинге чтобы узнавать низ эрана и анимировать
  


    var Flag3 = false;
    var distanseToBlock_text3 = $('.cont3__col1').offset().top // расстояние до блока                kkkkkkkkkkeeeekkkk
    // console.log('расстояние блока до начала страницы '+distanseToBlock_text)
    
      $(window).on('scroll',function(){
        var heightScreen3 = $(window).height() //высота эрана
        var mainHeight3 = heightScreen3 + $(window).scrollTop(); // Общее растояние
        // console.log('высота экрана '+heightScreen)
        // console.log('общее растояние '+mainHeight)
        if((distanseToBlock_text3 - mainHeight3 <= 2)&&(Flag3 == false)) {
          Flag3 = true;
          $('.cont3__col1').css({
            'opacity' : '1',
  
          })
          anime({
            targets: '.cont3__col1',
            translateX: [
            {value: '0%', duration: 900}
            ],
            easing: 'easeInOutQuad',
          });
         
        }
    })

  
    var Flag2 = false;
    var distanseToBlock_text2 = $('.cont3__col3').offset().top // расстояние до блока                kkkkkkkkkkeeeekkkk
    // console.log('расстояние блока до начала страницы '+distanseToBlock_text2)
    
      $(window).on('scroll',function(){
        var heightScreen2 = $(window).height() //высота эрана
        var mainHeight2 = heightScreen2 + $(window).scrollTop(); // Общее растояние
        // console.log('высота экрана '+heightScreen)
        // console.log('общее растояние '+mainHeight)
        if((distanseToBlock_text2 - mainHeight2 <= 3)&&(Flag2 == false)) {
          Flag2 = true;
          $('.cont3__col3').css({
            'opacity' : '1',

          })
          anime({
            targets: '.cont3__col3',
            translateX: [
            {value: '0%', duration: 900}
            ],
            easing: 'easeInOutQuad',
          });
         
        }
    })





   


  var Flag1 = false;
  var distanseToBlock_text1 = $('.cont5').offset().top // расстояние до блока                kkkkkkkkkkeeeekkkk
  // console.log('расстояние блока до начала страницы '+distanseToBlock_text1)
  
    $(window).on('scroll',function(){
      var heightScreen1 = $(window).height() //высота эрана
      var mainHeight1 = heightScreen1 + $(window).scrollTop(); // Общее растояние
      // console.log('высота экрана '+heightScreen1)
      // console.log('общее растояние '+mainHeight1)
      if((distanseToBlock_text1 - mainHeight1 <= 2)&&(Flag1 == false)) {
        Flag1 = true;
        $('.cont5').css({
          'opacity' : '1',
 
        })
        anime({
          targets: '.cont5',
          translateX: [
          {value: '0%', duration: 900}
          ],
          easing: 'easeInOutQuad',
        });
       
      }
  })
 


  
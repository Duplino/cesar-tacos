// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
      //add class to number of list element in .panel
      $('.panel').find('li').eq(konamiCodePosition).addClass('entered');

      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        triggerEgg();
        konamiCodePosition = 0;
        $('.panel').find('li').removeClass('entered');
      }
    } else {
      konamiCodePosition = 0;
      $('.panel').find('li').removeClass('entered');
    }
  });
  



  function triggerEgg(){
    cucaracha = new Audio('assets/media/la-cucaracha.mp3');
    cucaracha.play();
    $('.egg').css({
          bottom: -440,
          right: 0
        });
    $('.egg').animate({
      bottom: 0
    },400).promise().done(function(){
      $('.egg').animate({
        right: '100%'
      }, 3500).promise().done(function(){
        $('.egg').css({
          bottom: -460,
          right: 0
        });
      })
    })
    //remove class entered from panel
  }
  
  _te = triggerEgg;
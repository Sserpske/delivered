var widthOfWindow = function() {
        if(screen.width < 400) {
          return true;
        }
        return false;
      };

$(document).ready(function() {
  $('.slider').EasySlides({
    'autoplay': widthOfWindow(),
    'show': 3,
    'timeout': 7000,
    'delayaftershow': 700,
    'touchevents': true
  })
});

window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if (scrolled > 1) {
    $('.header').css({'box-shadow': '0px 4px 10px rgba(0, 0, 0, 0.25)', 'position': 'fixed'});
} else {
    $('.header').css({'box-shadow': 'none', 'position': 'absolute'});
}
}

function scrollToPos(scroll_id) {
  var top = $(scroll_id).offset().top;
  $('body,html').animate({scrollTop: top}, 1000);
}

$('a[href^="#inside"]').click(function(e){
  e.preventDefault();
  scrollToPos('#inside');
});

//отсчёт

var isClose = false;
var seconds = 3;
function time(id, link){
  var timeName = ' seconds...';
  if (seconds <= 1) {
    timeName = ' second...'
  }
  if (seconds >= 1) {
    document.querySelectorAll(".modal-registration__countdown")[id].innerHTML = seconds + timeName;
  }
  seconds--;
  if (seconds < 0 && !isClose) {
    location.href = link;
    return false;
  } else if (isClose) {
    seconds = 3;
    isClose = false;
    return false;
  }
  setTimeout(time, 1000, id, link);
}

$(document).ready(function() {
  var position = 0;
  var doc = $(document);
  var scrollFix = function(e){
    if(e.keyCode == 38 || e.keyCode == 40 || e.type == 'mousewheel'){
      return false;
    }
    $(this).scrollTop(position);
  };

  $('a[href^="#js-modal-main"]').click(function(e){
    e.preventDefault();
    $(".page__modal").show();
    $("#js-modal-main").show();
    $(".page__outer").addClass('active-modal');
    position = doc.scrollTop();
    doc.on('scroll keydown mousewheel', scrollFix);
  });

  $('a[href^="#js-modal-telegram"]').click(function(e){
    e.preventDefault();
    $(".page__modal").show();
    $("#js-modal-telegram").show();
    $("#js-modal-main").hide();
    $(".page__outer").addClass('active-modal');
    time(2, "https://t.me/messengerbasedsalesbot");
    position = doc.scrollTop();
    doc.on('scroll keydown mousewheel', scrollFix);
  });

  $('a[href^="#js-modal-fbmessenger"]').click(function(e){
    e.preventDefault();
    $(".page__modal").show();
    $("#js-modal-fbmessenger").show();
    $("#js-modal-main").hide();
    $(".page__outer").addClass('active-modal');
    time(0, "https://m.me/thedeliveredbook");
    position = doc.scrollTop();
    doc.on('scroll keydown mousewheel', scrollFix);
  });

  $('a[href^="#js-modal-skype"]').click(function(e){
    e.preventDefault();
    $(".page__modal").show();
    $("#js-modal-skype").show();
    $("#js-modal-main").hide();
    $(".page__outer").addClass('active-modal');
    time(1);
    position = doc.scrollTop();
    doc.on('scroll keydown mousewheel', scrollFix);
  });

  $('a[href^="#js-modal-viber"]').click(function(e){
    e.preventDefault();
    $(".page__modal").show();
    $("#js-modal-viber").show();
    $("#js-modal-main").hide();
    $(".page__outer").addClass('active-modal');
    time(3, "viber://pa?chatURI=deliveredbook");
    position = doc.scrollTop();
    doc.on('scroll keydown mousewheel', scrollFix);
  });

  /* Зaкрытие мoдaльнoгo oкнa */

  $('.modal__close').click(function(){
    $("#js-modal-main").hide();
    $(".modal-registration").hide();
    $(".page__modal").hide();
    $(".page__outer").removeClass('active-modal');
    isClose = true;
    seconds = 3;
    doc.unbind('scroll keydown mousewheel', scrollFix);
    return false;
  });
});
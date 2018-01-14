$(function(){
  $('.options').on('click',function () {
    if($(this).css("margin-left") !== "250px") {
      $(this).animate({'margin-left': +250}, 300);
       $('.btn').show(300);
       
    } else {
      $(this).animate({'margin-left': -250}, 300);
      $('.btn').hide(300);
   } 
  });
  //interVal;
  $('#left').click(function () {
    moveLeft();
  }); 
  $('#right').click(function () {
    moveRight();
  });
 

  var carouselList = $("#carousel ul");

  var interVal = setInterval(changeSlide,1500);
  var marginReset = carouselList.css({marginLeft:0});
  var dotsList = $('#carousel ol');
  var i = 2;
  function dots() {

  }

  /*function getPostion() {
    for (var i=1;i=5;i++) {

    dotsList.find("#id-"+i).

    }
  }*/

  function changeSlide(){
    carouselList.animate({'marginLeft':-600}, 1000, moveFirstSlide);
    $("#li-5").removeClass("active");
  };  

  function moveFirstSlide() {
    moveImage();
    dotNavi();
    carouselList.css({marginLeft:0});
  };

  function moveLeft() { 
    var firstItem = carouselList.find("li:first"); 
    var lastItem = carouselList.find("li:last");

        stopInterval();
    firstItem.before(lastItem).css({'marginLeft': -600});
    firstItem.animate({'marginLeft':+600}, 2000, function () {firstItem.css({marginLeft:0})});
    carouselList.stop().animate({'marginLeft': 0 },500, function() {carouselList.css({marginLeft:0});} );
    interVal = setInterval(changeSlide,1500);
  };

  function moveRight() {
    stopInterval();  
    carouselList.animate({'marginLeft': -600},500, moveFirstSlide);
    interVal = setInterval(changeSlide,1500);
  };
  
  function stopInterval() {
    clearInterval(interVal);
  }

  function moveImage() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
  }

  function dotNavi() {
    if (i<5) {
      
      $("#li-"+i).addClass("active").on('click', function() {
          $(this).css({'background-color': '#fff'});
      }, function () {
          $(this).css({'background-color': 'rgb(161, 161, 161)'});
      });

      $("#li-"+(i-1)).removeClass("active");
      i++;
        
    } else {
      $("#li-"+i).addClass("active");
      $("#li-4").removeClass("active");
      i=1;
    }
  }
});
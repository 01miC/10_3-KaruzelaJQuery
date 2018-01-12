$(function(){
  $('.options').on('click',function () {
    if($(this).css("margin-left") !== "200px") {
      $(this).animate({'margin-left': '+250'}, 300);
       $('.btn').show(300);
       
    } else {
      $(this).animate({'margin-left': '-250'}, 300);
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
  var imagePosition = carouselList.find("li");
        console.log(imagePosition);
  var interVal = setInterval(changeSlide,2500);
  var marginReset = carouselList.css({marginLeft:0});



  function changeSlide(){
    carouselList.animate({'marginLeft':-600}, 1000, moveFirstSlide);
    interVal;
  };
  

  function moveFirstSlide() {
    moveImage();
    carouselList.css({marginLeft:0});
    interVal;
  };

  function moveLeft() {
    if (imagePosition.lenght) {

    }
    stopInterval();
    carouselList.stop().animate({'marginLeft': +600},500);;
    firstItem.after(lastItem);
  };

  function moveRight() {
     stopInterval();  
    carouselList.stop().animate({'marginLeft': -600},500, moveImage);
    interVal;
  };
  
  function stopInterval() {
    clearInterval(interVal);
  }

  function moveImage() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
  }
});
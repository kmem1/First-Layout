

// Custom JS

// Carousel

$(document).ready(function(){
  var owl = $('.slider');
  owl.owlCarousel({
    loop: true,
    items: 1,
    itemClass: "slide-wrap",
    nav: false,
    navText: '',
    mouseDrag: false,
    dots: false
  });

  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  })

  $('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
  })

$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    var counters = $('.slider-counter');
    for(var i = 1; i<5; i++)
      counters[i].innerHTML = carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length;

    for(var i = 0; i<previews.length; i+=4)
      if(!previews[i].className.includes('active-preview'))
        previews[i].className += ' active-preview';

    for(var i = 0; i<boards.length; i++)
      boards[i].style.top = -50 + 'px';

    var navLi = $('.top-side>ul>li');
    for(var i = 0; i<navLi.length; i++)
      navLi[i].className = '';
    for(var i = 3; i<16; i+=3)
      navLi[i].className = 'active-nav';

    var contentBoxes = $('.content-box');
    for(var i = 0; i<contentBoxes.length; i++)
      contentBoxes[i].style.opacity = '0';

    for(var i = 3; i<19; i+=3)
      contentBoxes[i].style.opacity = '1';

  });

  // change image when click on preview
  var boards = document.querySelectorAll('.board-img');
  var previews = document.querySelectorAll('.board-preview');

  $('#img1').on('click',function(){
    for(var i = 0; i<boards.length; i++)
      boards[i].style.top = -50 + 'px';
  })

  $('#img2').on('click',function(){
    for(var i = 0; i<boards.length; i++)
      boards[i].style.top = -586 + 'px';
  })

  $('#img3').on('click',function(){
    for(var i = 0; i<boards.length; i++)
      boards[i].style.top = -1120 + 'px';
  })

  $('#img4').on('click',function(){
    for(var i = 0; i<boards.length; i++)
      boards[i].style.top = -1656 + 'px';
  })

  for(var i = 0; i<previews.length;i++)
    previews[i].addEventListener('click', function() {
      for(var j = 0; j<previews.length;j++)
        previews[j].className = previews[j].className.replace('active-preview', '');
      this.className += ' active-preview';
    })

  // change description in slide

  var navButtons = $('.navButton');
  for(var i = 0; i<navButtons.length; i++)
    navButtons[i].addEventListener('click',function(){

      var contentBoxes = $('.content-box');
      var navLi = $('.top-side>ul>li');
      for(var j = 0; j<navLi.length; j++)
        navLi[j].className = '';
      for(var j = 0; j<contentBoxes.length; j++)
        contentBoxes[j].style.opacity = '0';
      this.parentNode.className = 'active-nav';
      data = this.dataset.numbofbox;
      if(data == 1){
        var contentBox = this.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[1];
        contentBox.style.opacity = '1';
      }
      else if(data == 2){
        var contentBox = this.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3];
        contentBox.style.opacity = '1';
      }
      else{
        var contentBox = this.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[5];
        contentBox.style.opacity = '1';
      }

    })
    });


// card Slider

var slider = document.getElementById('card-slider');
var cards = document.getElementsByClassName('profile-card');
for(var i = 0; i<4; i++)
  cards[i].style.opacity = '1';

var prevButt = document.getElementById('prevButt');
var nextButt = document.getElementById('nextButt');
var currLeft = 0;
var cardCounter = 0;

prevButt.addEventListener('click',function(){
  if(cardCounter > 0){
    currLeft += 280;
    console.log(currLeft);
    slider.style.marginLeft = currLeft +'px';
    cards[cardCounter + 3].style.opacity = '0';
    cards[cardCounter - 1].style.opacity = '1';
    cardCounter--;
  }
})

nextButt.addEventListener('click',function(){
  if(cardCounter + 4 != cards.length){
    currLeft -= 280;
    console.log(currLeft);
    slider.style.marginLeft = currLeft +'px';
    cards[cardCounter].style.opacity = '0';
    cards[cardCounter + 4].style.opacity = '1';
    cardCounter++;
 }
})

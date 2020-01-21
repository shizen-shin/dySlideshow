(function(){
    'use strict';
    
  var current = 0; //page番号取得用
  var mainImage = document.getElementById('mainImage');

  var images =['images/pic01.jpg',
  'images/pic02.jpg',
  'images/pic03.jpg',
  'images/pic04.jpg',
  'images/pic05.jpg',
  'images/pic06.jpg'];

 

  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var page = document.getElementById('page');



  function dpn(){
    page.textContent = (Number(current)+1) + '/' + images.length;
  }

  dpn();

  prev.addEventListener('click',function(){
      current --;
      if(current == -1){
          current = images.length-1;
      }
      mainImage.src = images[current];
      dpn();
      wbc();
  })

  next.addEventListener('click',function(){
      current ++;
      console.log(current);
      if(current == 6){
        current = 0;
      }
      mainImage.src = images[current];
      dpn();
      wbc();
  })

  function wbc(){  /*white border current*/
    var thums = document.getElementsByClassName('thumbnailImage');
    for(i=0;i<thums.length;i++){
        thums[i].style.border="";
    }
    thums[current].style.border="solid white 3px";
  }

  wbc();

})();

(function(){
    'use strict';
    
  var current = 0; //index番号取得用
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
  var i = 0;
  


  function createThumbs(){
    for(i=0;i<images.length;i++){
      var li = document.createElement('li');

      var img = document.createElement('img');
      img.src = images[i];
      img.className = 'thumbnailImage';
      img.dataset.index = i;

      li.appendChild(img);
      thumbnails.appendChild(li);


     li.addEventListener('click',function(){
        mainImage.src = this.children[0].src;
        current = this.children[0].dataset.index;
        dpn();
        wbci();
      });
    }
  }

  createThumbs();


  

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
      wbci();
  })

  next.addEventListener('click',function(){
      current ++;
      if(current == 6){
        current = 0;
      }
      mainImage.src = images[current];
      dpn();
      wbci();
  })

  // //白線：html内記述
  // function wbci(){  /*white border current image*/
  //   var thums = document.getElementsByClassName('thumbnailImage');
  //   for(i=0;i<thums.length;i++){
  //       thums[i].style.border="";
  //   }
  //   thums[current].style.border="solid white 3px";
  // }

  //白線：idで付与
  function wbci(){
    var images = document.getElementsByClassName('thumbnailImage');
    for(i=0 ; i<images.length ; i++){
      images[i].id = '';
    }
    images[current].id ='currentImage';
  }

  wbci();

//自動送り機能
  var interval = 3000;
  var timer;

  function playSlideshow(){
    timer = setInterval(function(){
      next.click();
    },interval);
  }
  playSlideshow();

  next.addEventListener('click',function(){
    clearInterval(timer);
    playSlideshow();
  })

  prev.addEventListener('click',function(){
    clearInterval(timer);
    playSlideshow();
  })

  var thums = document.getElementsByClassName('thumbnailImage');
  for(i=0; i<thums.length; i++){
    thums[i].addEventListener('click',function(){
      clearInterval(timer);
      playSlideshow();
    })
  }

})();
'use strict';
{
  
  const images = [
    'img.neko/neko_000.jpg',
    'img.neko/neko_001.jpg',
    'img.neko/neko_002.jpg',
    'img.neko/neko_003.jpg',
    'img.neko/neko_004.jpg',
    'img.neko/neko_005.jpg',
  ]

  let currentIndex = 0;
  
  const main = document.getElementById('main');
  main.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    if(index === currentIndex){
      img.classList.add('current');
    }

    img.addEventListener('click', () => {
      main.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });
    
    const li = document.createElement('li');
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click',() => {
    let target = currentIndex + 1;
    if(target === images.length){
      target = 0;
    }
    document.querySelectorAll('.thumbnails img')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click',() => {
    let target = currentIndex - 1;
    if(target < 0){
      target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails img')[target].click();
  });

  function playSlideShow() {
    time = setTimeout(() => {
      next.click();
      playSlideShow();
    },2000);
  }

  let playing = false;
  let time;

  const play = document.getElementById('play');
  play.addEventListener('click',() => {
    if(playing === false){
      playSlideShow();
      play.textContent = 'Pause';
    }else{
      clearTimeout(time);
      play.textContent = 'Play';
    }
    playing = !playing;     //true falseの切り替え

  });
}

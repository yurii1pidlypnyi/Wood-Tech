//Swiper hero
let heroSlider = document.querySelector('.hero__slider');
if(heroSlider){
  new Swiper(heroSlider, {
    effect: 'fade',
    fadeEffect:{
      crossFade:true,
    },
    speed:1000,
    autoplay:{
      delay:1000
    }
  });
}
//Swiper Blog
let blogSlider = document.querySelector('.blog__slider');
if(blogSlider){
  new Swiper (blogSlider,{
    spaceBetween:20,
    pagination: {
      el: '.blog__pagination',
      clickable: true,
    },
    breakpoints: {
      1023:{
        slidesPerView:3,
      },
      600:{
        slidesPerView:2
      },
      320:{
        slidesPerView:1
      }
    }
  })
}
//Swiper Project
let projectSlider = document.querySelector('.project__slider');
if(projectSlider){
  new Swiper (projectSlider,{
    slidesPerView: 1,
    thumbs :{
      swiper: {
        el:'.project-mini__slider',
        slidesPerView: 3.5,
        freeMode: true,
        watchSlidesProgress: true,
        spaceBetween: 5,
        breakpoints: {
          576: {
            slidesPerView: 5.5
          },
          768: {
            slidesPerView: 7.5,
          }
        }
      }
    }
  })
}
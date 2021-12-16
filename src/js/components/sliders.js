//Swiper hero
new Swiper('.hero__slider', {
  effect: 'fade',
  fadeEffect:{
    crossFade:true,
  },
//  simulateTouch: false,
  speed:1000,
  autoplay:{
    delay:1000
  }
  // navigation :{
  //   nextEl:'.hero-button-next',
  //   prevEl:'.hero-button-prev'
  // },
  // pagination:{
  //   el:'.hero__pagination',
  //   type:'custom',
  //   renderCustom: function(swiper,current,total) {
  //     let indT = total >=10 ? total:`0${total}`
  //     let indC = current >=10 ? current:`0${current}`
  //     return `<span>${indC}<span class ='vertical-line'></span>${indT}<span> `
  //   }
  // },
  // scrollbar: {
  //   el:'.swiper-scrollbar',
  //   draggable: true,
  // }
});
//Swiper Blog
new Swiper ('.blog__slider',{
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

//Swiper Project
new Swiper ('.project__slider',{
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
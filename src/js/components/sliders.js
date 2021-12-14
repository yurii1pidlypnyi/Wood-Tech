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
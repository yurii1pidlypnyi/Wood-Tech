//Load more works-list
let worksItems = document.querySelectorAll('.list-card__item');
let loadMore =  document.querySelector('.load-more');

if(loadMore){
  loadMore.addEventListener('click',()=>{
    [...worksItems].forEach(item=>{
      if(item.classList.contains('visible')==false){
        item.classList.add('visible');
      }
    })
    loadMore.style.display ='none'
    document.querySelector('.works-list__body').classList.add('padding');
  })
}

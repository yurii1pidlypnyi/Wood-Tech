let blogPages = [...document.querySelectorAll('.blog-list__page')];

let nextPage = document.querySelector('.blog-list__next');
let prevPage = document.querySelector('.blog-list__prev')

if(blogPages.length){
  blogPages.forEach(item=>{
    item.addEventListener('click',()=>{
      switchPage(item)
    })
  })
}
if(nextPage){
  nextPage.addEventListener('click',()=>{
    switchPage(document.querySelector('.blog-list__page.active').nextElementSibling)
  });
}

if(prevPage){
  prevPage.addEventListener('click',()=>{
    switchPage(document.querySelector('.blog-list__page.active').previousElementSibling)
  });
}


function switchPage(element){
  let pages = [...document.querySelectorAll('.blog-list__page')]
  pages.forEach(item => {
    item.classList.remove('active')
  });
  element.classList.add('active')

  if(+element.textContent>1){
    prevPage.classList.remove('disabled')
  }else{
    prevPage.classList.add('disabled')
  }
  if(+element.textContent<3){
    nextPage.classList.remove('disabled')
  }else{
    nextPage.classList.add('disabled')
  }

  let blogItem = [...document.querySelectorAll('.blog__item')];

  blogItem.forEach(item=>{
  item.classList.remove('visible')
  })

  for(let i = (+element.textContent-1)*12; i< +element.textContent*12; i++){
  if(blogItem[i]){
    blogItem[i].classList.add('visible')
  }else{
    break
  }
  }
  document.querySelector('.blog-list').scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  })
}

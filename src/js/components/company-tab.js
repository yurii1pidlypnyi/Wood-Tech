let companyNav = [...document.querySelectorAll('.company__item')];

if(companyNav.length){
  companyNav.forEach(item => {
    item.addEventListener('click',()=>{
      companyNav.forEach(element=>{
        element.classList.remove('active')
      })
      item.classList.add('active');
      showPage(item.dataset.page);
    })
  });
  
}
function showPage(tab) {
  let companyPages = [...document.querySelectorAll('.company__tab')];
  companyPages.forEach(item=>{
    item.classList.remove('visible')
  })
  document.querySelector(`[data-path="${tab}"]`).classList.add('visible')
}

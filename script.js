const toogleElement = document.querySelector('.toogle-icon');
const toogleCircleElement = document.querySelector('.toogle-circle');

toogleElement.addEventListener('click', ()=>{
  toogleCircleElement.classList.toggle('active');
})
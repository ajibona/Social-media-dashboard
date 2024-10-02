const toogleElement = document.querySelector('.toogle-icon');
const toogleCircleElement = document.querySelector('.toogle-circle');

let lightMode = localStorage.getItem('switchon')


toogleElement.addEventListener('click', ()=>{
  toogleCircleElement.classList.toggle('active');

  lightMode = localStorage.getItem('lightMode');

  if(lightMode === 'switchon'){
    
    document.body.classList.remove('lightmode')

    localStorage.setItem('lightMode', null);

  }else{

    document.body.classList.add('lightmode')

    localStorage.setItem('lightMode', 'switchon')
  }
 
})

// Nav bar
const nav = document.getElementsByClassName('c-nav')
const cta = document.getElementsByClassName('c-cta')
const hero = document.getElementsByClassName('c-header')
window.onscroll = () => {
  if (window.scrollY > (hero[0].scrollHeight - nav[0].scrollHeight)){
   nav[0].classList.add('c-nav--scrolled') 
   cta[0].classList.remove('c-cta--light')
   cta[0].classList.add('c-cta--dark')
  }else {
    nav[0].classList.remove('c-nav--scrolled') 
    cta[0].classList.remove('c-cta--dark')
    cta[0].classList.add('c-cta--light')
  }
}


//Slider
const slider = document.getElementsByClassName('c-card')
const sliderContainer = document.getElementsByClassName('c-cards')
let translateX = 475 //initial value of sliderContainer translateX

const slideToLeft = () => {
  const activeCard = [...slider].filter(card => card.classList.contains('c-card--active'))
  const activeID = (activeCard[0].id.split('_')[1])
  if(activeID-2 >= 0 )
  activeCard[0].classList.remove('c-card--active')
  slider[activeID-2].classList.add('c-card--active')
  translateX += (slider[activeID-1].clientWidth)
  sliderContainer[0].style.transform = `translateX(${translateX}px)`
}

const slideToRight = () => {
  const activeCard = [...slider].filter(card => card.classList.contains('c-card--active'))
  const activeID =  (activeCard[0].id.split('_')[1])
  if (activeID < slider.length)
  activeCard[0].classList.remove('c-card--active')
  slider[activeID].classList.add('c-card--active') 
  translateX -= (slider[activeID-1].clientWidth)
  sliderContainer[0].style.transform = `translateX(${translateX}px)`
}
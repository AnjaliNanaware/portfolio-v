
const latestWorks = document.querySelector('.latest-works-link')
const downArrow = document.querySelector('.down-arrow')
const latestWorksArrow = document.querySelector('.latest-works-arrow')
const mainSection = document.querySelector('.main-section')


latestWorks.addEventListener('click', (e) => {
    scrollTo({
        top: mainSection.clientHeight,
        left: 0,
        behavior: "smooth",
      });
   
  })
  
  downArrow.addEventListener('click', (e) => {
    scrollTo({
        top: mainSection.clientHeight,
        left: 0,
        behavior: "smooth",
      });
  })
  
  latestWorksArrow.addEventListener('click', (e) => {
    scrollTo({
        top: mainSection.clientHeight,
        left: 0,
        behavior: "smooth",
      });
  })
  

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault(e) {
  e.preventDefault()
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e)
    return false
  }
}

  // call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
    console.log('Scroll Disabled')
  }
  
  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
    window.removeEventListener('touchmove', preventDefault, wheelOpt)
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
    console.log('Scroll Enabled')
  }
  
  
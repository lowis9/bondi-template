
// Our Work Shfful
let owLis = document.querySelectorAll('.our-work ul li');
let imgs = document.querySelectorAll('.our-work img');
let imgsArray = Array.from(imgs);

owLis.forEach((li) => {
  li.addEventListener('click',removeActive);
  li.addEventListener('click',manageImgs);
});

//Remove Active Class From All Lis And Add To Current
function removeActive(){
  owLis.forEach((li) => {
    li.classList.remove('active');
    this.classList.add('active')
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.opacity = '0.1';
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.opacity = '1';
  })
}
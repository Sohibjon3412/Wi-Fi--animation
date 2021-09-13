let elModalOpenBtn = document.querySelector('.modal-btn');
let elModalCloseBtn = document.querySelector('.modal-close');
let elModalContent = document.querySelector('.modal');

elModalOpenBtn.addEventListener('click',function(){
  elModalContent.classList.add('open');
});
elModalCloseBtn.addEventListener('click',function() {
  elModalContent.classList.remove('open');
} );
 
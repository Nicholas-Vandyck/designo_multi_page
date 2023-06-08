const open = document.querySelector('.mob-open');
const close = document.querySelector('.mob-close');
const tap = document.querySelector('.link')

open.addEventListener('click',(e) =>{
  e.preventDefault();
  tap.style.display = 'block';
  open.style.display = 'none';
  close.style.display = 'flex';
  
})

close.addEventListener('click',(e) =>{
  e.preventDefault();
  tap.style.display = 'none';
  open.style.display = 'flex';
  close.style.display = 'none';
});
const close = document.getElementById('close');
const nav = document.getElementById('nav');
const open = document.getElementById('open')


close.addEventListener('click', ()=>{
    nav.style.display = 'none'
})
open.addEventListener('click', ()=>{
    nav.style.display = 'flex'
})


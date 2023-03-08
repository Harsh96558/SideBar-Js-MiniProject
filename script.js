const Bar=document.querySelector('.fa-bars ')
const Cross=document.querySelector('.fa-xmark')
const Sidebar=document.querySelector('.sidebar')

Bar.addEventListener("click",()=>{
    Sidebar.classList.toggle('show-sidebar')


})
Cross.addEventListener("click",()=>{
    Sidebar.classList.remove('show-sidebar')

    
})

let getname=prompt('Enter your name plz😊')
let addnames=document.querySelectorAll('span')
let button=document.querySelector('button')
let close= document.querySelector('.popup i')




addnames.forEach((addname)=>{
    addname.innerHTML=getname
})

button.addEventListener('click', ()=>{
    document.querySelector('.popup').classList.add('active')
    document.querySelector('.backdrop').classList.add('active')
})
close.addEventListener('click', ()=>{
    document.querySelector('.popup').classList.remove('active')
    document.querySelector('.backdrop').classList.remove('active')
})
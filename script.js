//faire apparaitre et disparaitre le menu

const btn = document.querySelector('.btn');
const menu = document.querySelector('.conteneurMenu');
const menuListItem = document.querySelectorAll('.menuListItem');
const iconeMenu = document.querySelector('.menuicon');
let i = 0;

const TL = new TimelineMax({paused: true}); // ou on met nos animations

TL
.to(menu,1,{width:'45%'})
.staggerTo(menuListItem,0.3,{opacity: 1, x:0}, 0.2, '-=0.75')


btn.addEventListener('click', ()=>{
    if(i === 0){
        i++;
        TL.play();
        iconeMenu.scr= 'image\croix.svg';
    } else {
        i--;
        TL.reverse();
    }
})

menuListItem.forEach(item => item.addEventListener('click', ()=>{
    i--;
    TL.reverse();
    iconeMenu.src = 'menu.svg';
}))




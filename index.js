const menu = document.getElementById('menubar');
const dro = document.querySelector('.dropdown-content');


menu.addEventListener('click', function men(){
    if(dro.style.display == "block") {
        dro.style.display = "none";
    }else {
        dro.style.display = "block";
    }
});


const sClose = document.getElementById('search-btn');
const clo = document.querySelector('.searchdiv');
const closeBtn = document.querySelector('#close-btn')

sClose.addEventListener('click', function ac(){
    clo.style.display = "flex";
} )
closeBtn.addEventListener('click', function kapa(){
    clo.style.display = "none";
})

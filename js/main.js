let HeaderAddress = document.querySelectorAll('.address__info');
let subnav = document.querySelector('.subnav')
let subnav2 = document.querySelector('.subsubnav')
document.querySelector('.list').onclick = f5;
document.querySelector('.body').onclick = f6;
function f5(e){
    e.preventDefault();
    subnav.style.display = 'block';
}
document.querySelector('.link-uro').addEventListener('click', function(e){
    e.preventDefault();
    subnav2.style.display = 'block';
})
function f6(){
    subnav.style.display = 'none';
    subnav2.style.display = 'none';
};
document.querySelector('.upper__inner-burg').addEventListener('click', function (){
    for (let i of HeaderAddress){
        i.style.display = i.style.display === 'none' ? 'block': 'none'
    }

});
document.querySelector('.btn-two').addEventListener('click', function (){
    let nav = document.querySelector('.nav-second');
        nav.style.display = nav.style.display === 'none' ? 'block': "none"
    
});



  




  
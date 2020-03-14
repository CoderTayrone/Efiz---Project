$(function () {
    $('.links a').click(function () {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({ 'scrollTop': offSetTop });

        return false;
    })



    $('.button a').click(function () {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
        $('html,body').animate({ 'scrollTop': offSetTop });

        return false;
    })
})



/* funcionalidade no menu */
const buttonMenu = document.querySelector('.menu-opener')
buttonMenu.addEventListener('click',()=>{
    document.querySelector('.links').classList.toggle('oculte')
})



// /* animação */
const target = document.querySelectorAll('[data-anime]')
const animationClass =  'animate';

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if ((windowTop) > element.offsetTop ){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
            
    })
}
animeScroll();
if(target.length){
    window.addEventListener('scroll', function () {
        animeScroll();
    })
}



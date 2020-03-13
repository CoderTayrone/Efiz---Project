$(function () {
    $('.links a').click(function () {
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({ 'scrollTop': offSetTop });

        return false;
    })



    // $('.bn1-texto a').click(function () {
    //     var href = $(this).attr('href');
    //     var offSetTop = $(href).offset().top;
    //     $('html,body').animate({ 'scrollTop': offSetTop });

    //     return false;
    // })
})


// const buttonMenu = document.querySelector('.menu-opener')
// alert(buttonMenu)
// buttonMenu.addEventListener('click',()=>{
//     if (buttonMenu.innerHTML == ""){

//     }
// })
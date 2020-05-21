(function () { // muda o nome da class do body de "no-js" para "js"
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $btnMenu = document.querySelector('.header__btnMenu');
    $btnMenu.removeAttribute('style')
})()


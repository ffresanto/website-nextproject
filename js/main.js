(function () { // muda o nome da class do body de "no-js" para "js"
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024
    })
})()


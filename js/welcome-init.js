!function(){
    setTimeout(function(){siteWelcome.classList.remove('active')},1000)
    setTimeout(function(){
        onSet()
        topNavBar.classList.add('onset')
        if (window.scrollY>0) {
            topNavBar.classList.add('active')
        } else {
            topNavBar.classList.remove('active')
        }
    },1000)
}.call()
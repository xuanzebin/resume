!function(){
    window.addEventListener('scroll',()=>{
        onSet()
    })
    window.onSet=function(){
        let specialTags=document.querySelectorAll('[data-x]')
        let minTag=0
        for (i=1;i<specialTags.length;i++) {
            if (Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minTag].offsetTop-window.scrollY)+380)
            minTag=i 
        }
        specialTags[minTag].classList.add('onset')
        let aTags=document.querySelector('a[href="#'+specialTags[minTag].id+'"]')
        let liTags=aTags.parentNode
        let liTagsSibling=liTags.parentNode.children
        for (let i=0;i<liTagsSibling.length;i++) {
            liTagsSibling[i].classList.remove('highlight')
        }
        liTags.classList.add('highlight')
        if (window.scrollY===0) liTags.classList.remove('highlight')
    }
    let liTags=document.getElementsByClassName('menuTrigger')
    for (let i=0;i<liTags.length;i++) {
        liTags[i].onmouseenter =function(mouseEnter) {
            let liTarget=mouseEnter.currentTarget
            liTarget.classList.add('active')
        }
        liTags[i].onmouseleave=function(mouseLeave) {
            let liTarget=mouseLeave.currentTarget
            liTarget.classList.remove('active')
        }
    }
}.call()
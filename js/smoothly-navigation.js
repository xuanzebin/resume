!function(){
    var view=document.querySelector('nav>ul')
    var controller={
        view:null,
        initAnimate:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        init:function(view){
            this.view=view
            this.initAnimate()
            this.bindEvents()
        },
        bindEvents:function(){
            let aTags=document.querySelectorAll('nav>ul>li>a')
            for (let i=0;i<aTags.length;i++) {
                aTags[i].addEventListener('click',(aTagsOnclick)=>{
                    aTagsOnclick.preventDefault()
                    let aTarget=aTagsOnclick.currentTarget
                    let aTagId=document.querySelector(aTarget.getAttribute('href'))
                    this.scrollToElement(aTagId)
                })
            }
        },
        scrollToElement:function(aTagId){
            var targetTop=aTagId.offsetTop-100
            var currentTop=window.scrollY
            var coords = {y:currentTop}; 
            var slideTime=Math.abs(targetTop-currentTop)/1.3
            if (slideTime<400) {slideTime=400} else {if (slideTime>800) slideTime=800}
            var tween = new TWEEN.Tween(coords)
            .to({y:targetTop}, slideTime) 
            .easing(TWEEN.Easing.Quadratic.InOut) 
            .onUpdate(function() { 
                window.scrollTo(0,coords.y)
            })
            .start();
        }
        
    }
    controller.init(view)
}.call()
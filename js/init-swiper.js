!function(){
    var view=View('.slidesWrapper')
    var controller={
        view:null,
        swiper:null,
        init:function(view){
            this.view=view
            this.bindEvents()
            this.initSwiper()
        },
        bindEvents:function(){
            $('.slidesWrapper').on('mouseenter',()=>{
                this.swiper.autoplay.stop();
            })
            $('.slidesWrapper').on('mouseleave',()=>{
                this.swiper.autoplay.start();
            })
        },
        initSwiper:function(){
            this.swiper=new Swiper ('.swiper-container',this.swiperOptions)
        },
        swiperOptions:{
            autoplay:{delay:3000,stopOnLastSlide: false,disableOnInteraction: true,},
            loop: true,
            pagination: { el: '.swiper-pagination',},
            navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',}
        }
    }
    controller.init(view)
}.call()
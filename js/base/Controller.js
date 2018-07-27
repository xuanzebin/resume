window.Controller=function(options){
    let init=options.init
    let Object={
        view:null,
        model:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.model.init()
            init.call(this,view,model)
            this.bindEvents()
            console.log(this)
        }
    }
    for (var key in options) {
        if (key!=='init') {
            Object[key]=options[key]
        }
    }
    return Object
}
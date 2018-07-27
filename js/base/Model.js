window.Model=function(options){
    var resourceName=options.resourceName
    return {
        init:function(){
            var APP_ID = 'fO2eueoadxpJ5EXtiBqJ47ck-gzGzoHsz'
            var APP_KEY = '1b6xEhGhBp6lYk3h5dyLy5wo'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch:function(){
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save:function(messageObject){
            var Resource = AV.Object.extend(resourceName);
            var resource = new Resource();
            return resource.save(messageObject)
        }
    }
}
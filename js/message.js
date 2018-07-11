!function(){
    var APP_ID = 'fO2eueoadxpJ5EXtiBqJ47ck-gzGzoHsz';
    var APP_KEY = '1b6xEhGhBp6lYk3h5dyLy5wo';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });



    var query = new AV.Query('Message');
    query.find().then(function (message) {
        var array = message.map((messageValue)=>{
            return {
                name:messageValue.attributes.name,
                content:messageValue.attributes.content
            }
        })
        for (let i=0;i<array.length;i++) {
            var liTag=document.createElement('li')
            var olTag=document.querySelector('section.message > .messageBoard')
            liTag.innerText=`${array[i].name}  :  ${array[i].content}`
            olTag.appendChild(liTag)
        }
    }).then()

    var myform = document.querySelector('section.message > #message')
    myform.addEventListener('submit',(e)=>{
        e.preventDefault()
        var contentInput = myform.querySelector('input[name="content"]')
        var content = contentInput.value
        var name = myform.querySelector('input[name="name"]').value
        console.log(name,content)
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
            content: content,
            name: name
        }).then(function(object) {
            var liTag=document.createElement('li')
            var olTag=document.querySelector('section.message > .messageBoard')
            liTag.innerText=`${name}  :  ${content}`
            olTag.appendChild(liTag)
            console.log(contentInput)
            contentInput.value=''
        }).then(()=>{console.log(1)},(error)=>{console.log(error)})
    })    
}.call()


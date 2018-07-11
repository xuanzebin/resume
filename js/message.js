!function(){
    var view = document.querySelector('section.message')
    var model = {
        init:function(){
            var APP_ID = 'fO2eueoadxpJ5EXtiBqJ47ck-gzGzoHsz'
            var APP_KEY = '1b6xEhGhBp6lYk3h5dyLy5wo'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch:function(){
            var query = new AV.Query('Message');
            return query.find()
        },
        save:function(name,content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'content': content,
                'name': name
            })
        }
    }
    var controller = {
        view:null,
        form:null,
        model:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.form=document.querySelector('section.message > #message')
            this.model.init()
            this.loadMessage()
            this.bindEvents()
        },
        bindEvents:function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            var myform = this.form
            var contentInput = myform.querySelector('textarea[name="content"]')
            var content = contentInput.value
            console.log(contentInput)
            console.log(content)
            var name = myform.querySelector('input[name="name"]').value
            if (name==='') {alert('请输入用户名!')} else if (content==='') {alert('请输入内容!')} else {
                this.model.save(name,content).then(function(object) {
                    var liTag=document.createElement('li')
                    var olTag=document.querySelector('section.message > .messageBoard')
                    content=content.replace(/\r\n/g,"<BR>")
                    content=content.replace(/\n/g,"<BR>")
                    content=content.replace(/ /g,"&nbsp;")
                    liTag.innerHTML=`<span style="color:red;">${name}  :</span><br>${content}`
                    olTag.appendChild(liTag)
                    contentInput.value=''
                })
            }
        },
        loadMessage:function(){
            this.model.fetch().then(function(message) {
                var array = message.map((messageValue)=>{
                    return {
                        name:messageValue.attributes.name,
                        content:messageValue.attributes.content
                    }
                })
                for (let i=0;i<array.length;i++) {
                    var liTag=document.createElement('li')
                    var olTag=document.querySelector('section.message > .messageBoard')
                    array[i].content=array[i].content.replace(/\r\n/g,"<BR>")
                    array[i].content=array[i].content.replace(/\n/g,"<BR>")
                    array[i].content=array[i].content.replace(/ /g,"&nbsp;")
                    liTag.innerHTML=`<span style="color:red;">${array[i].name}  :</span><br>${array[i].content}`
                    olTag.appendChild(liTag)
                }
            })
        }
    }
    controller.init(view,model)
}.call()


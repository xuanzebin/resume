!function(){
    var view = View('section.message')
    var model = Model({resourceName:'Message'})
    var controller = Controller({
        form:null,
        init:function(view,model){
            this.form=document.querySelector('section.message > #message')
            this.loadMessage()
        },
        bindEvents:function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
            console.log(this)
        },
        saveMessage:function(){
            var myform = this.form
            var contentInput = myform.querySelector('textarea[name="content"]')
            var content = contentInput.value
            var name = myform.querySelector('input[name="name"]').value
            if (name==='') {alert('请输入用户名!')} else if (content==='') {alert('请输入内容!')} else {
                this.model.save({'name':name,'content':content}).then(function(object) {
                    var liTag=document.createElement('li')
                    var spanTagName=document.createElement('span')
                    var spanTagContent=document.createElement('span')
                    spanTagName.className='spanTagName'
                    spanTagContent.className='spanTagContent'
                    var olTag=document.querySelector('section.message > .messageBoard')
                    spanTagName.innerText=name+`  :\n`
                    spanTagContent.innerText=content
                    olTag.appendChild(liTag)
                    liTag.appendChild(spanTagName)
                    liTag.appendChild(spanTagContent)
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
                    var spanTagName=document.createElement('span')
                    var spanTagContent=document.createElement('span')
                    spanTagName.className='spanTagName'
                    spanTagContent.className='spanTagContent'
                    spanTagName.innerText=array[i].name+`  :\n`
                    spanTagContent.innerText=array[i].content
                    olTag.appendChild(liTag)
                    liTag.appendChild(spanTagName)
                    liTag.appendChild(spanTagContent)
                }
            })
        }
    })
    controller.init(view,model)
}.call()


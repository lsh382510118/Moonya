var eventUtil = {
    //添加句柄
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler)
        }else{
            element['on' + type] =handler;
        }
    },
    //删除句柄
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handerler,false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler);
        }else{
            element['on'+type] = null;
        }
    },
    //获取事件
    getEvent:function(event){
        return event?event:window.event;
    },
    //获取类型
    getType:function(){
        return event.type;
    },
    //获取对象
    getElement: function (event) {
        return event.target || event.srcElement;
    },
    //quxiao取消默认行为--比如a:href
    preventDefault: function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //停止冒泡事件
    stopPropagation: function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    }
}

























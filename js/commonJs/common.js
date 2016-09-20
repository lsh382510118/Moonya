function tabFunc(obj,index){
    var tabParentId = obj.parentNode.id;
    var tabList = document.getElementById(tabParentId).getElementsByTagName('div');
    console.info(tabParentId);

    for (var i =0;i<tabList.length;i++){
        if(index == i){
            tabList[i].className = 'active';
        }else {
            tabList[i].className = '';
        }
    }
}


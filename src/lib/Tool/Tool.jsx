const Tool={};

/**
 * 发送ajax请求和服务器交互
 * @param mySetting 配置ajax的配置
 * @returns {*}
 */
Tool.ajax=function(mySetting){
    var setting={
        url: window.location.pathname, //默认ajax请求地址
        async:true, //true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false
        type:'GET', //请求的方式
        data:{}, //发给服务器的数据
        dataType: 'json',
        success: function(text){}, //请求成功执行方法
        error: function() {} //请求失败执行方法
    }

    var aData=[];
    var sData='';

    //属性覆盖
    for(var attr in mySetting){
        setting[attr]=mySetting[attr];
    }

    for(var attr in setting.data){
        aData.push(attr + '=' + filter(setting.data[attr]));
    }
    sData=aData.join('&');
    setting.type=setting.type.toUpperCase();

    var xhr=new XMLHttpRequest();

    try{
        if (setting.type == 'GET') {
            sData=setting.url + '?' +sData;
            xhr.open(setting.type,sData+ '&' +new Date().getTime(),setting.async);
            xhr.send();
        }else{
            xhr.open(setting.type,setting.url,setting.async);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send(sData);
        }
    }catch (e){
        return httpEnd();
    }

    function httpEnd() {
        if(xhr.readyState==4){
            var head=xhr.getAllResponseHeaders();
            var response=xhr.responseText;

            if (/application\/json/.test(head) || setting.dataType === 'json' &&
                /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
                response = JSON.parse(response);
            }

            if (xhr.status == 200) {
                setting.success(response, setting, xhr);
            } else {
                setting.error(setting, xhr);
            }
        }
    }

    xhr.end = function () {
        xhr.removeEventListener('readystatechange', httpEnd, false);
    }

    function filter(str) { //特殊字符转义
        str += ''; //隐式转换
        str = str.replace(/%/g, '%25');
        str = str.replace(/\+/g, '%2B');
        str = str.replace(/ /g, '%20');
        str = str.replace(/\//g, '%2F');
        str = str.replace(/\?/g, '%3F');
        str = str.replace(/&/g, '%26');
        str = str.replace(/\=/g, '&3D');
        str = str.replace(/#/g, '%23');
        return str;
    }

    return xhr;
};
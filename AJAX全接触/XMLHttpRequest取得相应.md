# XMLHttpRequest取得相应

+ responseText: 获得字符串形式的响应数据
+ responseXML: 获得XML形式的响应数据
+ status和statusText: 以数字和文本形式返回HTTP状态码
+ getAllResponseHeader(): 获得所有的响应报头
+ getResponseHeader():查询响应中的某个字段的值

## readyState属性

0: 请求未初始化，open还没有调用
1: 服务器连接已建立，open已经调用
2: 请求已接收，也就是接收到头信息了
3: 请求处理中，也就是接收到响应主体了
4: 请求已完成，且响应已就绪，也是响应完成了

``` JavaScript
var request = new XMLHttpRequest();
request.open("GET","get.php",true);
request.send();
request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        //  做一些事情 request.responseText
    }
}
```
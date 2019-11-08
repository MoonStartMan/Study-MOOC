# 用jQuery实现Ajax

## Ajax常用参数

+ type: 类型, 'POST'或'GET',默认为'GET'
+ url: 发送请求地址
+ data: 是一个对象，连同请求发送到服务器的数据
+ dataType: 预期服务器返回的数据类型。如果不指定，jQuery将自动根据 HTTP 包 MIME 信息来智能判断，一般我们采用json格式，可以设置为"json"
+ success: 是一个方法，请求成功后的回调函数。传入返回后的数据，以及包含成功代码的字符串
+ error: 是一个方法，请求失败时调用此函数。传入XMLHttpRequest对象。


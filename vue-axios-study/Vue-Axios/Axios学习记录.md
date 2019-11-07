# Axios学习记录

## 了解Axios

### Axios是什么？

+ Axios是一个基于promise的HTTP库
+ 可以用于浏览器和node.js

### Axios有哪些特性

+ 支持 Promise API
+ 拦截请求和响应
+ 转换请求数据和响应数据
+ 取消请求
+ 自动转换 JSON 数据
+ 客户端支持防御XSRF

## Axios基础用法

### Axios请求方式

``` javascript
axios请求方法: get,post,put,patch,delete

get: 获取数据
post: 提交数据(表单提交+文件上传)
put: 更新数据(所有数据推送到后端)
patch: 更新数据(只将修改的数据推送到后端)
delete: 删除数据

//  http://localhost:8080/data.json?id=12
axios.get('/data.json',{
    params: {
        id: 12
    }
}).then((res) => {
    console.log(res);
})
axios({
    method: 'get',
    url: '/data.json',
    params: {
        id: 12
    }
}).then(res => {
    console.log(res)
})
//  post
//  form-data 表单提交(图片上传、文件上传)
//  applicition/json
let data = {
    id: 12
}
axios.post('/post', data).then
( res => {
    console.log(res)
})
axios({
    method: 'post',
    url: '/post',
    data: data
}).then(res => {
    console.log(res);
})
//  form-data请求
let formData = new FormData()
for(let key in data) {
    formData.append(key, data[key])
}
axios.post('/post', formData).then(
    res => {
    console.log(res);
    }
)

//  put请求
axios.put('/put', data).then(res => {
    console.log(res)
})

//  patch请求
axios.patch('/patch', data).then(res => {
    console.log(res);
})

//  delete请求
axios.delete('/delete',{
    params: {
    id: 12
    }
}).then(res => {
    console.log(res);
})

axios({
    method: 'delete',
    url: '/delete',
    params: {},
    data: {}
}).then( res => {
    console.log(res)
})
},
```

### Axios axios.all()方法

``` javascript
axios.all(
    [
        axios.get('data.json'),
        axios.get('/city.json')
    ]
).then(
    axios.spread((dataRes,cityRes) => {
        console.log(dataRes,cityRes)
    })
)
```

### 创建Axios实例

``` javascript
let instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000
})
let axios2 = axios.create({
    baseURL: 'http://localhost:9090',
    timeout: 5000
})
instance.get('/data.json').then(
    res => {
        console.log(res)
    }
)
```

### Axios配置

``` javascript
axios.create({
    baseURL: 'http://localhost:8080',    //..请求的域名，基本地址
    timeout: 1000,  //  请求超时时长(ms)
    url: '/data.json',  //..请求的路径
    method: 'get,post,put,patch,delete',  //..请求方法
    headers: {
        token: ''
    }, //...请求头
    params: {}, //  请求参数拼接在url上
    data: {},   //  请求参数放在请求体
})
//  1.axios全局配置
axios.defaults.timeout = 1000
axios.defaults.baseURL = 'http://localhost:8080'
//  2.axios实例配置
let instance  = axios.create();
instance.defaults.timeout = 3000
//  3.axios请求配置
instance.get('/data.json',{
    timeout: 5000
})
```

### 常用开发及实际用例

``` javascript
//  实际开发
//  有两种请求接口:
//  http:localhost: 9090
//  http:localhost: 9091
let instance = axios.create({
    baseURL: 'http:localhost:9090',
    timeout: 1000
})
let instance1 = axios.create({
    baseURL: 'http:localhost:9091',
    timeout: 3000
})
//  baseUrl,timeout,url,method,params
instance.get('/contactList',{
    params: {}
}).then(
    (res) => {
        console.log(res)
    }
)
// baseUrl, timeout: 5000, method, url,
instance1.get('/orderList',{
    timeout: 5000
}).then(res => {
    console.log(res);
})
```

### 拦截器

``` javascript
created() {
    //  请求拦截器
axios.interceptors.request.use(
    config => {
        //  在发送请求前做些什么
        return config
    },err => {
        //  在请求错误的时候做些什么
        return Promise.reject(err)
    }
)
//  响应拦截器
    axios.interceptors.response.use
    (res => {
        //  请求成功对响应数据做处理
        return res
    }, err => {
        //  响应错误做些什么
        return Promise.reject(err)
    })
    //  取消拦截器（了解）
    let interceptors = axios.interceptors.request.use
    (config => {
        config.headers={
            auth: true
        }
        return config
    })
    axios.interceptors.request.eject(
        interceptors
    )

    // 例子  登录状态(token:'')
    // 需要登录的接口
    let instance = axios.create({})
    instance.interceptors.request.use
    (
        config=>{
            config.headers.token = ''
            return config;
        }
    )
    //  不需要登录的接口
    let newInstance = axios.create({})

    //  移动端开发
    let instance_phone = axios.create(
        {})
        instance_phone.interceptors.request.use(config => {
            $("#modal").show()
            return config
        })
        instance_phone.interceptors.response.use(res => {
            $('#modal').hide()
            return res
        })
```

### 错误处理

## Axios进阶用法

## Axios进一步封装

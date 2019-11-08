# 解析JSON

## eval方法

``` JavaScript
var jsondata =
    {
        "staff" : [{
            [
                {
                    "name":"洪七",
                    "age":"23",
                },
                {
                    "name":"郭靖",
                    "age":"30",
                },
                {
                    "name":"黄蓉",
                    "age":"31",
                },
            ]
        }]
    }
var jsonobj = eval('('+ jsondata +')');
jsonobj.staff[0].name //    洪七
```

## JSON.parse

``` JavaScript
var jsondata =
    {
        "staff" : [{
            [
                {
                    "name":"洪七",
                    "age":"23",
                },
                {
                    "name":"郭靖",
                    "age":"30",
                },
                {
                    "name":"黄蓉",
                    "age":"31",
                },
            ]
        }]
    }
var jsonobj = JSON.parse('('+ jsondata +')');
jsonobj.staff[0].name //    洪七
```

## 区别

eval()不会看JSON字符串是否合法。
parse更安全。
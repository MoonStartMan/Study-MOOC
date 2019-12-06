# XMLHttpRequest对象

``` JavaScript
    var request;
    if(window.XMLHttpRequest) {
        request = new XMLHttpRequest(); //  IE7+, Firefox, Chrome, Opera, Safari
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");   // IE6,IE5
    }
```
{
    //  所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function(err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('http://i4.buimg.com/567571/de1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
        loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}

{
    //  有一个图片加载完就添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function(err) {
                reject(err);
            }
        })
    }

    function showImgs(img) {
        let p= document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('http://i4.buimg.com/567571/de1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
        loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImgs)
}
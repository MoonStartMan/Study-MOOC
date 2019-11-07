# 从零开始webpack

[TOC]

## 1 小试牛刀
### 1.1创建并初始化项目
找个喜欢的目录，执行以下命令:
``` node.js
mkdir webpack_demo
cd webpack_demo
npm init -y
npm install webpack webpack-cli --save-dev
```
### 1.2创建目录及文件
>dist为最终编译出来的生产环境代码，src为开发环境代码。

```
    / -webpack-demo
    |-package.json
+   |- /dist
+   	|-index.html
+   |- /src
+   	|- index.js
```
### 1.3修改package.json
调整 package.json 文件，以便确保我们安装包是私有的(private)，并且移除 main 入口。这可以防止意外发布你的代码。
同时加入script命令，让执行npx webpack 等同于执行npm run build。
```
 "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,
-   "main": "index.js",
    "scripts": {
-      "test": "echo \"Error: no test specified\" && exit 1",
+      "build": "webpack --mode production",
+      "dev": "webpack --mode development"
     },
    ...
```
### 1.4编写项目代码
编写dist/index.html，注意引入bundle.js（打包时会自动生成bundle.js）
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack Demo</title>
    <script src="bundle.js"></script>
</head>
<body>
</body>
</html>
```
编写src/index.js，随便写点。
``` JavaScript
document.write('hello world');
```
### 1.5配置webpack.config.js
项目根目录创建webpack.config.js，用来配置webpack。
```
    |- package.json
    |- /dist
       |- index.html
    |- /src
       |- index.js
+   |- webpack.config.js
```
编写webpack.config.js
``` JavaScript
const path = require('path');
module.exports = {
    // 入口js路径
    entry: './src/index.js',
    // 编译输出的js及路径
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```
### 1.6测试打包
执行npm run build，生成的dist如下：
```
|-  /dist
    |- index.html
+   |- bundle.js 
```
浏览器运行index.html，显示"hello world"。
以上是最原始的方式，需要在dist配置html，这样并不科学。我们需要实现的是在src里开发，然后全部生成到dist中。请继续后面的章节。
## 2搭建基础架构
### 2.1实现每次编译前自动清空dist目录
安装clean-webpack-plugin。
```
npm install clean-webpack-plugin --save-dev
```
### 2.2实现从html模板自动生成最终html
```
npm install html-webpack-plugin --save-dev
```
### 2.3构建项目
构建目录如下
```
 |- package.json
  |- webpack.config.js
  |- /dist
  |- /src
     |- /html
        |- index.html
        |- login.html
     |- /js
        |- index.js
        |- login.js 
```
重新编写webpack.config.js
``` JavaScript
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口js路径
    entry: {
        index: './src/js/index.js',
        login: './src/js/login.js'
    },
    plugins: [
        // 自动清空dist目录
        new CleanWebpackPlugin(),
        // 设置html模板生成路径
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/html/login.html',
            chunks: ['login']
        }),
    ],
    // 编译输出配置
    output: {
        // js生成到dist/js，[name]表示保留原js文件名
        filename: 'js/[name].js',
        // 输出路径为dist
        path: path.resolve(__dirname, 'dist')
    }
};
```
查看html代码，发现对应的js已经被引入了。
## 3搭建开发环境的热检测服务器
现在我们搭建一个基于nodejs的服务器，让代码运行在开发环境，并且实现在修改代码时不用刷新即可自动热更新页面。
### 3.1安装webpack-dev-server
自动检测代码变化并实时刷新浏览器
```
npm install webpack-dev-server --save-dev
```
修改package.json
``` json
    "scripts": {
        "build": "webpack --mode production",
-       "dev": "webpack --mode development"
+       "serve": "webpack-dev-server --open --mode development"
    },
```
修改webpack.config.js
``` JavaScript
    module.exports = {
       entry: {...},
+      // 动态监测并实时更新页面
+      devServer: {
+          contentBase: './dist',
+          // 默认8080，可不写
+          port: 8080,
+          // 热更新，无需刷新
+          hot: true
+      },
        plugins: [...],
    ...
    };
```
执行npm run serve，会在本地启动一个nodejs的web服务，浏览器会自动打开http://localhost:8080/ 。
通过http://localhost:8080/login.html可以访问login页面 。
这时修改src下的js或者html文件，页面会自动更新。

### 3.2 使用source-map追踪源代码错误
在编译生成的dist目录中，js代码已被重新混淆，如果出现错误，无法将错误正确定位到原始代码的对应位置，这样不方便调试生成环境的代码。如果需要精确调试生产环境代码，可通过source-map实现。（如果不需要此功能，可以跳过本节）

修改webpack.config.js:
>inline-source-map: 将source map 转换为 DataUrl 后添加到页面的js中，生成的js文件较大（不推荐）
>source-map: 生成对应的map文件，js较小，但是需要服务器设置不允许访问map文件（推荐）

``` JavaScript
    module.exports = {
        ...
        devServer: {...},
+       // 方便追踪源代码错误
+       devtool: 'source-map',
        plugins: [...],
        ..
    };
```
## 4分离生产环境和开发环境的配置文件
webpack.config.js包含了生产环境和开发环境的配置，分离后，有利于代码的维护。
### 安装webpack-merge插件
使用webpack-merge来实现拆分。
```
npm install webpack-merge --save-dev
```
### 拆分webpack.config.js
新建以下3个文件：webpack.common.js （公共配置）webpack.dev.js （开发环境配置）webpack.prod.js （生产环境配置）将webpack.config.js代码拆分后，可删除webpack.config.js。
```
|- package.json
- |- webpack.config.js
+ |- webpack.common.js
+ |- webpack.dev.js
+ |- webpack.prod.js
  |- /dist
  |- /src
```
### webpack.common.js保留公共配置的代码
``` JavaScript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {...},
    plugins: [...],
    output: {...}
};
```

### webpack.dev.js保留开发环境配置的代码

``` JavaScript
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
    // 动态监测并实时更新页面
    devServer: {
        contentBase: './dist',
        // 默认端口8080，可不填
        port: 8080,
        // 热更新，无需刷新
        hot: true
    }
});
```

### webpack.prod.js保留生产环境配置的代码
``` JavaScript
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
    // 方便追踪源代码错误
    //（如果不需要3.2小节的追踪功能，可以注释掉下行代码）
    devtool: 'source-map'
});
```

修改package.jspn
``` json
    "scripts": {
M      "build": "webpack --config webpack.prod.js --mode production",
M      "serve": "webpack-dev-server --open --config webpack.dev.js --mode development"
    },
```

## 集成公用JS库(以jQuery为例)
本节以jQuery为例，讲解如何引入公用JS库。如果使用AngularJS、React或者Vue，建议使用官方的CLI工具。
### 5.1安装并集成jQuery
安装jQuery
```
npm install jquery --save
```

### 5.2全局应用jQuery
jQuery是每个页面都要用的，在每个页面import太过于繁琐，修改webpack.common.js进行全局配置:

``` JavaScript
    ...
+  const webpack = require('webpack');

    module.exports = {
        ...
        plugins: [
+           new webpack.ProvidePlugin({
+               $: 'jquery',
+               jQuery: 'jquery'
+           }),
            new CleanWebpackPlugin(),
            ...
```

### 5.3使用jQuery
修改src/html/index.html，加入div，用于测试：
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack Demo</title>
</head>
<body>
    <div id="app">
        <div id="info"></div>
    </div>
</body>
</html>
```
修改src/js/index.js:
$('#info').text('jQuery正常使用');
执行npm run build，生成dist如下:
```
|- /dist
    |- index.html
    |- login.html
    |- /js
       |- index.js  <--jQuery代码已集成到这里
       |- login.js
```
login.js没有jQuery代码是因为login.js里暂时还没用到jQuery，webpack的打包机制是“确实使用了”才会被真正打包进去。

如果我们的项目有很多html静态页，每个js都集成了jQuery，而且jQuery代码基本不会变动，这样就导致js文件冗余，我们可以把jQuery单独打包出来，可以方便浏览器缓存，减少请求的js大小。

### 5.4单独打包jQuery
使用webpack的splitChunks来实现单独打包。
修改webpack.common.js:
``` JavaScript
    plugins: [
        ...
        // 设置html模板生成路径
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
M           chunks: ['jquery', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/html/login.html',
M           chunks: ['jquery', 'login']
        }),
     ],
+    optimization: {
+       splitChunks: {
+           cacheGroups: {
+               commons: {
+                   test: /jquery/,
+                   name: 'jquery',
+                   chunks: 'all'
+               }
+           }
+       }
+   },
     // 编译输出配置
     output: {...}
```
执行npm run build，页面运行正常，生成dist如下:
```
|- /dist
    |- index.html
    |- login.html
    |- /js
       |- index.js 
       |- login.js
+      |- jquery.js  <--jQuery已独立出来
```
## 6 CSS及Stylus的使用
### 6.1加载CSS和Stylus
本节以Stylus为例，如果使用Sass/Less，可以参考本方法。混用CSS是为了同时掌握CSS使用方法。
安装相关依赖包
```
npm install style-loader css-loader --save-dev
npm install stylus-loader stylus --save-dev
```
现在的src目录如下:
```
  |- /src
+    |- /css
+        |- /common
+           |- common.css
+           |- frame.css （这个文件@import common.css和reset.css）
+           |- reset.css
+        |- /pages
+           |- index.styl
+           |- login.styl
     |- /html
        |- index.html
        |- login.html
     |- /js
       （略）
```
css及styl内的样式代码，请自行补充，这里不再展示了。

index.js中引入样式:
```
import '../css/common/frame.css';
import '../css/pages/index.styl';
```
login.js中引入样式:
```
import '../css/common/frame.css';
import '../css/pages/login.styl';
```
修改webpack.common.js:
```
module.exports = {
        ...
        module: {
            rules: [
+              {
+                  test: /\.css$/,
+                  use: [
+                      'style-loader',
+                      'css-loader'
+                  ]
+              },
+              {
+                  test: /\.styl$/,
+                  use: [
+                      'style-loader',
+                      'css-loader',
+                      'stylus-loader'
+                  ]
+              }
               ...
```
执行build后，样式代码会直接打包插入到html文件中。
### 6.2分离样式到css文件
现在我们想把样式通过link方式引入。
先安装MiniCssExtractPlugin
```
npm install mini-css-extract-plugin --save-dev
```
然后修改webpack.common.js
``` JavaScript
    ···
+   const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {
        plugins: [
           ...
+          new MiniCssExtractPlugin({
+              filename: 'css/[name].css'
+          }),
            new CopyWebpackPlugin([
                { from: './src/static', to: 'static' }
            ])
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
+                      // 将原来的style-loader替换
M                      MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.styl$/,
                    use: [
+                      // 将原来的style-loader替换
M                      MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader'
                    ]
                }
                ···
```
执行npm run build，生成的dist如下:
```
|- /dist
   |- index.html
   |- login.html
+  |- /css
+     |- index.css
+     |- login.css
   |- /js
     （略）
```
index.css和login.css都包含了公用样式，还可以进一步优化，把公用样式分离出来。
### 6.3优化分离css公用样式
修改webpack.common.js，使用正则，把src/css/common/下的css单独打包并引用。
``` JavaScript
...
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
M           chunks: ['style', 'jquery', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/html/login.html',
M           chunks: ['style', 'jquery', 'login']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /jquery/,
                    name: 'jquery',
                    chunks: 'all'
                },
+               styles: {
+                   test: /[\\/]common[\\/].+\.css$/,
+                   name: 'styles',
+                   chunks: 'all',
+                   enforce: true
+               }
            }
        }
    },
```
执行npm run build，生成的dist如下:
```
|- /dist
    |- index.html
    |- login.html
+   |- /css
+      |- index.css
+      |- login.css
       |- style.css <-- 公用css
    |- /js
       |- index.js
       |- login.js
       |- jquery.js
       |- style.js  <-- 怎么会有这个？
```
发现在dist/js/目录下会生成一个多余的styles.js，并且html也会引用这个多余的js。这是webpack4的bug，从2016年到现在处于open状态未解决，第三方插件都试过了，目前还没有解决，期待在webpack5中可以解决。

## 7使用ejs将html模板化
如果每个页面都有一个header，就可以把header抽成html模块，然后在需要的页面引入。这里通过ejs来实现。ejs本质还是个html，只不过多了些模板语法。
安装ejs-loader
```
npm install ejs-loader --save-dev
```
以index.html为例，把index.html重命名为Index.ejs
修改webpack.common.js，支持ejs:
``` JavaScript
    plugins: [
          ...
            new HtmlWebpackPlugin({
                filename: 'index.html',
+               // 这里将html改成ejs
M               template: './src/html/index.ejs',
                chunks: ['style', 'jquery', 'index']
            }),
            ...
    module: {
            rules: [
                ...
+               {
+                   test: /\.ejs/,
+                   use: ['ejs-loader'],
+               }
                ...
```
创建src/html/components/header/header.ejs
```
<div id="header" class="G-header">这是公用头部</div>
```
在src/html/index.ejs引入即可。
```
   ...
    <div id="app">
+       <%= require('./components/header/header.ejs')() %>
        <div id="info"></div>
    </div>
    ...
```
## 8 加载图片资源
本章节介绍如何在css和html中引用图片。

安装插件file-loader和url-loader，url-loader基于file-loader，所以两个都要安装。 (也可以只使用file-loader，url-loader在file-loader的基础上扩展了功能，比如能设置小于多少KB的图片进行base64转码等）。
```
npm install file-loader url-loader --save-dev
```

### 8.1 css加载图片
修改webpack.common.js
``` JavaScript
  module: {
        rules: [
            ...
+           {
+              test: /\.(png|svg|jpg|gif|webp)$/,
+              use: [
+                  {
+                      loader: 'url-loader',
+                      options: {
+                          // 最终生成的css代码中,图片url前缀
+                          publicPath: '../images',
+                          // 图片输出的实际路径(相对于dist)
+                          outputPath: 'images',
+                          // 当小于某KB时转为base64
+                          limit: 0
+                      }
+                  }
+              ]
+           }
             ...
         ]
     },
```
在src/images里加入图片1.jpg
```
|- /src
   |- /css
       (略)
   |- /html
       (略)
+  |- /images
+     |- 1.jpg
   |- /js
      (略)
   |- /static
      (略)
```
在src/css/pages/index.styl加入代码:
```
.bg-pic
    width: 200px
    height: 200px
    background: url(../../images/1.jpg) no-repeat
```
在src/html/index.ejs加入代码:
```
    <div id="app">
        <%= require('./components/header/header.ejs')() %>
        <div id="info"></div>
+       <div class="bg-pic"></div>
    </div>
```
执行npm run build，图片可正常访问，生成dist目录如下:
```
|- /dist
    |- /css
      (略)
    |- /images
+      |- f0a89ff457b237711f8306a000204128.jpg
    |- /js
      (略)
    |- /static
      (略)
    |- index.html
    |- login.html
```
### 8.2 html加载图片
html加载图片的方式就是img加载图片，需要提取html中的图片地址，需要安装插件html-loader
```
npm install html-loader --save-dev
```
在src/images里加入图片2.jpg
```
|- /src
   |- /css
      (略)
   |- /html
      (略)
   |- /images
      |- 1.jpg
+     |- 2.jpg
   |- /js
      (略)
   |- /static
      (略)
```
修改webpack.common.js，这样可以把html中的图片提取并打包。
``` JavaScript
    module: {
        rules: [
            ...
+           {
+              test: /\.(html)$/,
+              use: {
+                  loader: 'html-loader',
+                  options: {
+                      attrs: ['img:src', 'img:data-src', 'audio:src'],
+                      minimize: true
+                  }
+              }
+           }
            ...
```
在src/html/index.ejs加入代码：
``` html
    <div id="app">
        <%= require('./components/header/header.ejs')() %>
        <div id="info"></div>
        <div class="bg-pic"></div>
+       <img src="${require('../images/2.jpg')}" alt="">
    </div>
```
执行npm run build，图片已可正常访问，生成dist目录如下
```
|- /dist
   |- /css
      (略)
   |- /images
      |- f0a89ff457b237711f8306a000204128.jpg
+     |- dab63db25d48455007edc5d81c476076.jpg
   |- /js
      (略)
   |- /static
      (略)
   |- index.html
   |- login.html
```
但是发现html中img的图片不能显示。查看生成的代码发现：
dist/index.html中的src为../images/xxxx.jpg
dist/css/index.css中background的url也为../images/xxxx.jpg
因为html和css的路径差了一级，导致路径不一致。因此需要区分html和css中的图片路径。
### 8.3 解决css和html中引用图片路径不一致的问题
修改webpack.common.js，将MiniCssExtractPlugin.loader改为对象的方式：
``` JavaScript
  module: {
        rules: [
            ...
            {
                test: /\.css$/,
                use: [
M                  {
M                      loader: MiniCssExtractPlugin.loader,
M                      options: {
M                          // css中的图片路径增加前缀
M                          publicPath: '../'
M                      }
M                  },
                'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
M                  {
M                      loader: MiniCssExtractPlugin.loader,
M                      options: {
M                          // css中的图片路径增加前缀
M                          publicPath: '../'
M                      }
M                  },
                    'css-loader',
                    'stylus-loader'
                ]
            },
            ...
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
D                          // 最终生成的图片路径代码 (删除)
D                          // publicPath: '../images',  (删除)
                            // 图片输出的实际路径
                            outputPath: 'images',
                            // 当小于某KB时转为base64
                            limit: 0
                        }
                    }
                ]
            },
            ...
```
再执行npm run build，路径显示正常了。
## 9 加载iconfont
从阿里巴巴图标网站 www.iconfont.cn/ 下载字体和样式文件，导入到项目中，结构如下：
```
|- /src
   |- /css
      |- /common
         |- common.css
         |- frame.css
+        |- iconfont.css
         |- reset.css
      |- /pages
         |- index.styl
         |- login.styl
+  |- /fonts
+     |- iconfont.eot
+     |- iconfont.svg
+     |- iconfont.ttf
+     |- iconfont.woff
+     |- iconfont.woff2
   |- /html
       (略)
   |- /images
       (略)
   |- /js
       (略)
   |- /static
       (略)
```
src/css/common/frame.css里要@import "iconfont.css",然后修改iconfont.css中每个字体的路径。
在src/html/index.ejs里直接使用字体(字体样式在iconfont网站定义)：
``` html
<i class="G-iconfont G-ficon-cart"></i>
```
修改webpack.common.js
``` JavaScript
    module: {
        rules: [
            ...
+          {
+              test: /\.(woff|woff2|eot|ttf|svg)$/,
+              use: {
+                  loader: 'file-loader',
+                  options: {
+                      // 保留原文件名和后缀名
+                      name: '[name].[ext]',
+                      // 输出到dist/fonts/目录
+                      outputPath: 'fonts',
+                  }
+              }
+          }
        ]
    },
```
执行npm run build， 生成dist目录如下：
```
|- /dist
   |- /css
      (略)
   |- /images
      (略)
+  |- /fonts
      |- iconfont.eot
      |- iconfont.svg
      |- iconfont.ttf
      |- iconfont.woff
   |- /js
      (略)
   |- /static
      (略)
   |- index.html
   |- login.html
```
没有生成woff2文件，是因为css中没有引用。
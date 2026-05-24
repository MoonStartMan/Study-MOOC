# Study-MOOC

[![GitHub stars](https://img.shields.io/github/stars/MoonStartMan/Study-MOOC?style=social)](https://github.com/MoonStartMan/Study-MOOC/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/MoonStartMan/Study-MOOC?style=social)](https://github.com/MoonStartMan/Study-MOOC/network)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> 慕课网课程学习仓库，记录前端开发相关课程的学习笔记和实战项目。

## 项目简介

本仓库汇总了在慕课网学习的前端开发相关课程，包含课程笔记、代码示例和实战项目。涵盖 HTML/CSS、JavaScript、Vue、jQuery、TypeScript、Webpack 等多个前端技术栈，是学习前端开发的完整记录。

## 学习内容概述

### 核心技术

- **HTML/CSS**：响应式布局、CSS3 特效、主流布局方案
- **JavaScript**：基础语法、进阶特性、实战应用
- **TypeScript**：类型系统、面向对象、工程化实践
- **jQuery**：基础使用、源码解析、实战项目

### 前端框架与工具

- **Vue.js**：基础入门、组件开发、项目实战
- **Webpack**：模块打包、配置优化、工程化
- **Bootstrap**：响应式框架使用

### 实战项目

- 图片裁剪工具
- 日期选择器
- 轮播图组件
- 响应式商城
- Todo 应用
- Canvas 写字板

## 目录结构

```
Study-MOOC/
├── README.md                          # 项目说明文档
├── AJAX全接触/                         # AJAX 技术学习
│   └── ...
├── CSS3-mainstream-layout/            # CSS3 主流布局
│   └── ...
├── CSS3D-special-effects/             # CSS3D 特效
│   └── ...
├── JS与jQuery对比/                     # JS 与 jQuery 对比学习
│   └── ...
├── JavaScript-Image-cropping/         # JS 图片裁剪项目
│   └── ...
├── JavaScript深入浅出/                 # JavaScript 进阶
│   └── ...
├── TypeScript基础学习/                 # TypeScript 入门
│   └── ...
├── Webpack-Demo/                      # Webpack 学习
│   └── ...
├── bootstrap/                         # Bootstrap 学习
│   └── ...
├── canvas写字/                         # Canvas 项目
│   └── ...
├── datePicker/                        # 日期选择器项目
│   └── ...
├── jQuery-carousel/                   # jQuery 轮播图
│   └── ...
├── jQuery/                            # jQuery 基础
│   └── ...
├── jQuery深层/                         # jQuery 源码解析
│   └── ...
├── promise-study-record/              # Promise 学习
│   └── ...
├── response/                          # 响应式布局
│   └── ...
├── study-Menu-collection/             # 学习菜单汇总
│   └── ...
├── vue-axios-study/                   # Vue + Axios
│   └── ...
├── vue-freemall/                      # Vue 商城项目
│   └── ...
├── vue-webpack-todo-/                 # Vue Webpack Todo
│   └── ...
├── 六个案例学会响应式布局/              # 响应式布局案例
│   └── ...
└── 图片预加载/                         # 图片预加载技术
    └── ...
```

## 学习进度

| 课程/项目 | 状态 | 完成度 | 技术栈 |
|-----------|------|--------|--------|
| JavaScript 深入浅出 | 已完成 | 100% | JavaScript |
| jQuery 基础与进阶 | 已完成 | 100% | jQuery |
| jQuery 深层解析 | 已完成 | 100% | jQuery |
| TypeScript 基础 | 已完成 | 100% | TypeScript |
| Vue 基础与实战 | 已完成 | 100% | Vue.js |
| Webpack 配置 | 已完成 | 100% | Webpack |
| CSS3 主流布局 | 已完成 | 100% | CSS3 |
| CSS3D 特效 | 已完成 | 100% | CSS3 |
| AJAX 全接触 | 已完成 | 100% | AJAX |
| Promise 学习 | 已完成 | 100% | JavaScript |
| 响应式布局案例 | 已完成 | 100% | HTML/CSS |
| 图片裁剪工具 | 已完成 | 100% | JavaScript |
| 日期选择器 | 已完成 | 100% | JavaScript |
| 轮播图组件 | 已完成 | 100% | jQuery |
| Canvas 写字板 | 已完成 | 100% | Canvas |
| Vue 商城项目 | 已完成 | 100% | Vue.js |
| Todo 应用 | 已完成 | 100% | Vue.js |
| Bootstrap | 已完成 | 100% | Bootstrap |

## 知识点总结

### JavaScript 核心

```javascript
// 闭包
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

// Promise
const promise = new Promise((resolve, reject) => {
  // 异步操作
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

// 异步函数
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

### Vue.js 核心

```javascript
// Vue 组件基础
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  methods: {
    greet() {
      alert(this.message);
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  mounted() {
    console.log('组件已挂载');
  }
};
```

### Webpack 配置要点

```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
```

### 响应式布局技巧

```css
/* Flexbox 布局 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Grid 布局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* 媒体查询 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

## 项目展示

### 实战项目列表

1. **图片裁剪工具** (`JavaScript-Image-cropping/`)
   - 技术：原生 JavaScript + Canvas
   - 功能：图片上传、裁剪、预览、下载

2. **日期选择器** (`datePicker/`)
   - 技术：JavaScript + CSS
   - 功能：年月日选择、范围选择、自定义格式

3. **轮播图组件** (`jQuery-carousel/`)
   - 技术：jQuery + CSS3
   - 功能：自动播放、手动切换、指示器、淡入淡出效果

4. **Vue 商城** (`vue-freemall/`)
   - 技术：Vue.js + Vue Router + Axios
   - 功能：商品列表、购物车、订单管理

5. **Todo 应用** (`vue-webpack-todo-/`)
   - 技术：Vue.js + Webpack
   - 功能：任务增删改查、状态筛选、本地存储

6. **Canvas 写字板** (`canvas写字/`)
   - 技术：HTML5 Canvas + JavaScript
   - 功能：画笔、橡皮擦、颜色选择、保存图片

## 贡献指南

欢迎提交 Issue 和 Pull Request 来完善本仓库！

### 如何贡献

1. **补充笔记**：对课程内容进行补充和完善
2. **修复错误**：指出代码或文档中的错误
3. **添加项目**：分享你的慕课网学习项目
4. **优化代码**：改进现有项目的代码质量

### 提交规范

- 代码需经过测试，确保可正常运行
- 文档使用 Markdown 格式
- 项目包含 README 说明文件
- 提交信息清晰描述变更内容

## 推荐学习路径

### 初学者路线

1. HTML/CSS 基础 → CSS3 主流布局 → 响应式布局
2. JavaScript 基础 → JavaScript 深入浅出
3. jQuery 基础 → jQuery 实战项目

### 进阶路线

1. TypeScript 基础学习
2. Vue.js 基础 → Vue 项目实战
3. Webpack 配置与优化
4. Promise 与异步编程

### 实战提升

1. 完成各个实战项目
2. 阅读 jQuery 源码
3. 尝试重构和优化代码

## 相关资源

### 慕课网课程

- [JavaScript 深入浅出](https://www.imooc.com/)
- [Vue.js 实战](https://www.imooc.com/)
- [Webpack 深入与实战](https://www.imooc.com/)

### 推荐文档

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)
- [Vue.js 官方文档](https://cn.vuejs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/zh/)

## 许可证

本项目采用 [MIT](LICENSE) 许可证开源。

## 致谢

- 感谢慕课网提供优质的课程资源
- 感谢所有贡献者的支持与帮助

---

**作者**: [MoonStartMan](https://github.com/MoonStartMan)  
**维护**: 持续更新中

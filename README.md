# 图片社交应用前端项目

一个基于 Vue 3 的现代化图片社交/分享应用前端项目，支持响应式设计，根据不同终端（移动/PC）提供不同的用户体验。

## 技术栈

- Vue 3 + Vite
- Tailwind CSS
- Vue Router
- Vuex + vuex-persistedstate
- SCSS
- SVG 图标系统

## 主要功能

- 🖼️ 图片浏览和分享（瀑布流展示）
- 👤 用户注册/登录系统（含第三方登录）
- 👨‍💼 个人资料管理
- 💎 会员功能
- 💰 支付系统
- 🎨 主题切换（亮色/暗色模式）
- 📱 自适应布局（移动端/PC 端）
- 🔒 滑动验证码

## 特色组件

- 瀑布流图片展示
- 自定义按钮组件
- 消息通知组件
- 倒计时组件
- 路由过渡动画

## 第三方集成

- 阿里云 OSS 存储
- QQ 登录
- 微博分享
- 阿里云 ARMS 监控

## 安装与使用

### 环境要求

- Node.js 14.x 或更高版本
- npm 6.x 或更高版本

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
src/
├── api/            # API接口
├── assets/         # 静态资源
├── constants/      # 常量定义
├── derectives/     # 自定义指令
├── libs/           # 自定义组件库
├── router/         # 路由配置
├── store/          # Vuex状态管理
├── styles/         # 全局样式
├── utils/          # 工具函数
├── vendor/         # 第三方库
├── views/          # 页面组件
├── App.vue         # 根组件
├── main.js         # 入口文件
└── permission.js   # 权限控制
```

## 功能特点

### 响应式设计

该项目根据用户设备类型（移动端/PC 端）提供不同的路由配置和 UI 布局，确保最佳用户体验。

### 主题切换

支持亮色/暗色模式切换，使用 Tailwind CSS 实现，满足不同用户的偏好。

### 图片处理

使用瀑布流组件展示图片，支持图片预览、上传和分享功能。

### 用户系统

完整的用户注册/登录系统，支持 QQ 等第三方登录，以及会员功能。

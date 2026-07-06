# 课听懂了 - 课堂学习助手

基于 DeepSeek AI 的课堂学习助手，将录音/文字转换为结构化笔记和复习卡片。

## 功能特点

- **文本录入**：粘贴课堂文字内容，AI自动生成结构化笔记
- **录音上传**：上传录音文件（体验版），自动转写并生成笔记
- **知识图谱**：可视化展示知识点关联关系
- **复习卡片**：自动生成问答卡片，支持翻转检验记忆
- **阅读进度**：实时显示阅读进度

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 API Key

编辑 `server.js`，填入你的 DeepSeek API Key：

```javascript
const DEEPSEEK_API_KEY = '你的DeepSeek API Key';
```

### 3. 启动服务

```bash
npm start
```

### 4. 访问应用

打开浏览器访问 `http://localhost:3000`

## 项目结构

```
课听懂了/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── app.js              # 前端逻辑
├── server.js           # 后端服务器（API代理）
├── package.json        # 项目配置
└── .github/workflows/
    └── pages.yml       # GitHub Pages部署配置
```

## 技术栈

- **前端**：原生 HTML/CSS/JavaScript
- **后端**：Node.js + Express
- **AI**：DeepSeek API (deepseek-chat)

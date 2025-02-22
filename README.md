# BimViewer

BimViewer 是一个基于 BIM 技术的展示平台，致力于为智慧水务领域提供可视化的模型展示和交互体验。该项目支持展示传统的 BIM 模型和智慧水务相关的 BIM 模型，并且具备高效的页面跳转和搜索功能，方便用户浏览和查找所需的内容。

![BimViewer](https://pub-eb4d193b9a814125a65c71bdc18ad5d0.r2.dev/bimviewer.webp)

## 项目结构

- **index.html** - 网站的首页，包含了所有模型的展示和搜索功能。
- **src/** - 存放源代码的文件夹，包含项目的 JS、CSS 和其他资源。
- **dist/** - 项目构建后的输出文件夹，包含静态文件，可以部署到服务器上。

## 开发环境

本项目基于 [Vite](https://vitejs.dev/) 构建，提供了快速的开发启动和构建命令。

### 安装依赖

在本地运行项目之前，首先需要安装项目依赖。运行以下命令来安装依赖包：

```bash
npm install
```

### 启动开发服务器

运行以下命令启动本地开发服务器：

```bash
npx vite
```

开发服务器启动后，你可以在浏览器中访问 `http://localhost:3000` 来查看项目效果。

### 构建项目

当你准备将项目部署到生产环境时，使用以下命令生成构建文件：

```bash
npm run build
```

此命令会生成生产环境所需的静态文件，并将它们放在 `dist/` 文件夹中。你可以将 `dist/` 文件夹中的内容上传到任何支持静态文件托管的服务器上，如 [Cloudflare Pages](https://pages.cloudflare.com/)、[Vercel](https://vercel.com/)、[Netlify](https://www.netlify.com/) 等。

### 部署

部署到 Cloudflare Pages 或其他静态托管平台时，只需要将 `dist/` 文件夹中的内容上传即可。具体步骤可以参考各大托管平台的文档。

## 主要功能

- **模型展示**：展示传统和智慧水务相关的 BIM 模型，支持 3D 渲染和交互操作。
- **搜索功能**：通过搜索框，用户可以根据关键字快速查找所需的模型。
- **响应式设计**：项目支持在不同设备上良好的展示效果，适应 PC 和移动端浏览。

## 技术栈

- **Three.js**：用于渲染 3D 模型。
- **Vite**：快速的前端构建工具。
- **HTML/CSS/JavaScript**：前端开发技术栈。
- **Cloudflare Pages**（可选）：用于托管和部署静态文件。

## 大型模型文件下载

部分模型文件超过 100MB，因此不能直接通过项目部署的静态文件进行访问。如果你需要下载这些大型模型文件，放到structures-models目录下对应的文件夹内即可，请访问以下百度网盘链接进行下载：

- **大型模型文件下载**: [百度网盘链接](https://pan.baidu.com/s/1CXpJNakUF9M32fgygKU_Sg?pwd=vxrq)

## 贡献

欢迎贡献代码和功能，提交 PR 之前请确保已经进行充分的测试。如果有任何问题或建议，欢迎通过 [GitHub Issues](https://github.com/your-repo/issues) 提交。

## 联系

如果你有任何问题，或者希望进一步了解该项目，请联系我们。

---

© 2024 BimViewer

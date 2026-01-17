# 婚礼主持管家 - 专业高级版

专业婚礼主持人单机工作平台 - 档期管理、客户信息、婚礼策划一站式解决方案

## 功能特点

- 📅 **档期管理**：日历视图和列表视图，方便管理婚礼档期
- 👥 **客户管理**：完整的客户信息管理，包括新郎新娘信息、联系方式等
- 📋 **婚礼问卷**：自定义婚礼问卷模板，支持分享和导入
- 📝 **环节规划**：可拖拽的婚礼环节时间轴，灵活调整
- 🎵 **音乐管理**：多场次音乐播放系统，支持自定义音乐库
- 🧰 **主持人工具箱**：台词库、合同模板、互动游戏等实用工具

## 部署指南

### 方案一：部署到 GitHub Pages

1. **创建GitHub仓库**
   - 注册GitHub账号
   - 创建新仓库（如：`wedding-host-manager`）
   - 选择公开仓库（Public）

2. **上传项目文件**
   - 使用Git命令行上传：
     ```bash
     # 初始化Git仓库
     git init
     
     # 添加文件
     git add .
     
     # 提交更改
     git commit -m "Initial commit"
     
     # 关联GitHub仓库
     git remote add origin https://github.com/您的用户名/wedding-host-manager.git
     
     # 推送代码
     git push -u origin main
     ```
   - 或直接在GitHub网页上上传文件

3. **启用GitHub Pages**
   - 进入仓库设置
   - 点击左侧"Pages"
   - 选择"main"分支，点击"Save"
   - 等待几分钟，即可通过 `https://您的用户名.github.io/wedding-host-manager/` 访问

### 方案二：部署到 Vercel（推荐）

1. **注册Vercel账号**
   - 访问 https://vercel.com/ 注册账号
   - 可使用GitHub账号直接登录

2. **导入项目**
   - 登录后点击"New Project"
   - 选择"Import Git Repository"
   - 连接GitHub账号并选择您的仓库
   - 点击"Import"

3. **配置部署**
   - 保持默认配置即可
   - 点击"Deploy"

4. **访问网站**
   - 部署完成后，Vercel会生成一个公共URL
   - 可通过类似 `https://wedding-host-manager.vercel.app` 的地址访问

### 方案三：本地运行

1. **安装Node.js**
   - 访问 https://nodejs.org/ 下载并安装Node.js

2. **启动本地服务器**
   ```bash
   # 启动服务器
   node server.js
   ```

3. **访问网站**
   - 在浏览器中输入 `http://localhost:8000`

## 使用说明

### 基本操作

1. **切换功能模块**：点击顶部导航栏的不同选项卡
2. **添加数据**：点击相应的"添加"按钮
3. **编辑数据**：点击项目卡片或列表项
4. **删除数据**：在编辑界面或通过操作按钮
5. **数据同步**：点击顶部"数据同步"按钮，使用6位同步码在不同设备间同步数据

### 数据备份与恢复

1. **备份数据**：点击"备份数据"按钮，下载JSON格式的备份文件
2. **恢复数据**：点击"恢复数据"按钮，选择备份文件导入

## 技术栈

- HTML5 + CSS3 + JavaScript (ES6+)
- 纯前端实现，数据存储在浏览器本地
- 响应式设计，支持移动端访问

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ 移动端浏览器（iOS Safari、Chrome Mobile）

## 苹果手机优化

- 支持添加到主屏幕，获得接近原生App的体验
- 优化了触摸操作和响应速度
- 适配了各种屏幕尺寸

## 许可证

MIT License

## 反馈与建议

如有问题或建议，欢迎提交Issue或联系我们。

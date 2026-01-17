# Vercel手动部署指南

由于系统中没有安装Git，无法通过命令行推送更改到GitHub。您可以按照以下步骤在Vercel上手动重新部署项目：

## 步骤1：登录Vercel

1. 打开浏览器，访问 [Vercel官网](https://vercel.com/)
2. 登录您的Vercel账号

## 步骤2：进入项目页面

1. 在Vercel仪表盘上，找到您的项目（如：`wedding-host-manager`）
2. 点击项目名称，进入项目页面

## 步骤3：重新部署

### 方法A：从GitHub重新部署

1. 在项目页面，点击顶部的「Deployments」选项卡
2. 点击右侧的「Deploy」按钮
3. 在下拉菜单中，选择「Deploy Production」
4. Vercel会从GitHub重新拉取代码并部署

### 方法B：手动上传文件

1. 在项目页面，点击顶部的「Deployments」选项卡
2. 点击右侧的「Deploy」按钮
3. 在下拉菜单中，选择「Deploy from CLI」
4. 或选择「Upload」选项，手动上传项目文件

## 步骤4：等待部署完成

1. 部署过程中，您可以看到实时日志
2. 部署成功后，会显示生成的URL

## 步骤5：访问网站

1. 复制生成的URL
2. 在浏览器中粘贴并访问
3. 您应该能看到主持人管家的登录页面

## 常见问题解决

### 1. 部署失败：No Output Directory named "public" found

这是因为Vercel默认寻找public目录，但我们的项目文件在根目录。

**解决方案：**
- 确保项目根目录中有`vercel.json`文件
- 文件内容如下：
  ```json
  {
    "version": 2,
    "builds": [
      {
        "src": "**/*",
        "use": "@vercel/static"
      }
    ]
  }
  ```

### 2. 部署成功但网站空白

**解决方案：**
- 检查index.html文件是否存在于根目录
- 检查index.html文件内容是否完整
- 查看Vercel部署日志，寻找错误信息

### 3. 苹果手机访问出现SSL错误

**解决方案：**
- 确保使用https://开头的URL
- Vercel会自动配置SSL证书，无需手动设置
- 检查设备日期和时间是否正确

## 其他部署选项

如果您希望使用Git命令行部署，可以：

1. 安装Git：访问 [Git官网](https://git-scm.com/) 下载并安装
2. 配置Git：设置用户名和邮箱
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. 使用Git命令推送更改
   ```bash
   git add .
   git commit -m "Update files"
   git push
   ```

## 部署成功后

部署成功后，您可以：
- 在任何设备上通过生成的URL访问主持人管家
- 在苹果手机上添加到主屏幕，获得接近原生App的体验
- 使用数据同步功能在不同设备间同步数据

祝您部署成功！
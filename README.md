# Change Pro 静态站

这个目录是可直接上线的正式分享版本。

## 目录结构

- `index.html`
- `change-pro-assets/`
- `.nojekyll`

## 推荐用法

长期使用并且方便随时修改，推荐这套：

1. 把整个 `change-pro-site` 放进一个 Git 仓库
2. 连接到 `Vercel` 或 `Netlify`
3. 后续只要修改 `index.html` 或 `change-pro-assets`，再重新部署即可

## 最推荐的平台

- `Vercel`
  - 适合长期维护
  - 改版后重新部署方便
  - 可自定义域名

- `Netlify`
  - 也很适合静态站
  - 拖拽上传快
  - 同样支持长期托管和自定义域名

## 上线时上传什么

直接上传整个 `change-pro-site` 目录。

## 后续修改哪里

- 页面内容与样式：`index.html`
- 图片和字体资源：`change-pro-assets/`

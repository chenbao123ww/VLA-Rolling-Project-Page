# VLA-Rolling 论文主页部署说明

## 发布前请先确认：双盲评审

你上传的 PDF 首页注明 **ICLR 2027 双盲评审中（Anonymous authors）**。如果你现在用个人 GitHub 账号公开发布主页，主页/代码仓库的归属可能暴露作者身份。**请先确认投稿会议的匿名政策与公开时间要求**，再将主页仓库设为公开。以下步骤只是技术部署方法，并不代表建议立即公开。

## 主页已有内容

- 论文标题、基于原文整理的简介、方法三个阶段及公式。
- 从 PDF 提取的原始方法框架和实验图：Figure 1、2、3、4、6。
- Table 1 的全部 16 组实验结果，可在网页中切换 LIBERO、MetaWorld、LIBERO-Plus、RoboTwin 2.0。
- 真实机器人实验结果（70% → 75%，227.28 → 176.50 ms/chunk）。
- Paper、Code、Model、arXiv 按钮及匿名草稿 BibTeX。

## 第一步：本地预览

解压项目，打开 `index.html`。也可以在该文件夹运行：

```bash
python -m http.server 8000
```

打开 `http://localhost:8000/`。

## 第二步：设置跳转链接

只要编辑 `site-config.js`：

```js
window.VLARollingConfig = {
  paperPdf: "assets/VLA-Rolling.pdf", // 本地论文 PDF；现在已能打开
  arxiv: "",                          // 等投稿 arXiv 后填 URL
  code: "https://github.com/chenbao123ww/VLA-Rolling",
  huggingface: "",                    // 等模型发布后填 URL
};
```

`arxiv` 和 `huggingface` 为空时保留按钮并显示 `Soon`，不会跳到错误页面。

`code` 指向你的**私有**仓库；外部访客在仓库未公开时可能显示 404 或无访问权限。

## 第三步：发布到 GitHub Pages（仅在允许公开时）

1. 在 GitHub 新建公开仓库，推荐命名为 `VLA-Rolling-Project-Page`。
2. 将 ZIP 内 `VLA-Rolling-Project-Page/` **文件夹的内容** 上传到仓库根目录，确保 `index.html` 在根目录。
3. 进入仓库 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`，分支选择 `main`，路径选择 `/(root)`。
5. 保存，等待 Pages 完成构建，地址预计为：

   `https://chenbao123ww.github.io/VLA-Rolling-Project-Page/`

仓库名改变会影响最终 URL，但不影响站内图片和资源路径。

## 文章审稿结束后

在 `index.html` 更新作者列表、投稿状态、引用 BibTeX。此版本使用 Anonymous Authors 和 Under review，不宣称已被任何会议接收。以后替换 PDF 时保持 `assets/VLA-Rolling.pdf` 文件名，或者同步修改 `site-config.js`。

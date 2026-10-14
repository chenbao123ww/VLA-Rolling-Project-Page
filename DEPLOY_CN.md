# VLA-Rolling 论文主页部署说明

## 当前论文版本

网页使用 `assets/VLA_Rolling_OmniAI.pdf`（2026 年 10 月），作者顺序、浙江大学单位信息和通讯作者均按新版 PDF 首页展示，BibTeX 已同步更新。

## 主页已有内容

- 论文标题、基于原文整理的简介、方法三个阶段及公式。
- 从 PDF 提取的原始方法框架和实验图：Figure 1、2、3、4、5、6。
- Table 1 的全部 16 组实验结果，可在网页中切换 LIBERO、MetaWorld、LIBERO-Plus、RoboTwin 2.0。
- Table 2 的完整组件消融结果与分析，以及 Figure 5 的置信度与去噪预算分析。
- 真实机器人实验结果（70% → 75%，227.28 → 176.50 ms/chunk）。
- Paper、Code、Model、arXiv 按钮及包含完整作者信息的 BibTeX。

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
  paperPdf: "assets/VLA_Rolling_OmniAI.pdf", // 本地论文 PDF；现在已能打开
  arxiv: "",                          // 等投稿 arXiv 后填 URL
  code: "https://github.com/chenbao123ww/VLA-Rolling",
  huggingface: "",                    // 等模型发布后填 URL
};
```

`arxiv` 和 `huggingface` 为空时保留按钮并显示 `Soon`，不会跳到错误页面。

`code` 指向你的**私有**仓库；外部访客在仓库未公开时可能显示 404 或无访问权限。

## 第三步：发布到 GitHub Pages

1. 在 GitHub 新建公开仓库，推荐命名为 `VLA-Rolling-site`。
2. 将本地项目文件夹的内容上传到仓库根目录，确保 `index.html` 在根目录。
3. 进入仓库 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`，分支选择 `main`，路径选择 `/(root)`。
5. 保存，等待 Pages 完成构建，地址预计为：

   `https://chenbao123ww.github.io/VLA-Rolling-site/`

仓库名改变会影响最终 URL，但不影响站内图片和资源路径。

## 后续更新

在 `index.html` 更新作者列表、单位和引用 BibTeX。更换 PDF 文件名时，同时修改 `site-config.js` 以及 `index.html` 中的所有 PDF 链接和页码引用。

新版 PDF 的 Table 1 中，π₀.₅ 在 MetaWorld 上的基线为 67.22，结果为 67.88，但差值仍印为 +9.32。网页按前两项数值计算为 +0.66，与新版 Table 2 一致；上传的 PDF 文件未做修改。

# VLA-Rolling — Academic Project Page

A complete, dependency-free research project website generated from the manuscript **“VLA-Rolling: Fewer Denoising Steps, Better Control via Adaptive Action Reuse.”**

## Current manuscript

The website uses the October 2026 manuscript `assets/VLA_Rolling_OmniAI.pdf`, including its 13-author byline, Zhejiang University affiliation, and correspondence information for Jie Zhang. The BibTeX entry cites this manuscript.

## Included

- `index.html` — full English academic project homepage
- `styles.css` — responsive layout and typography
- `script.js` — benchmark tabs, mobile navigation, BibTeX copy, resource-link states
- `site-config.js` — **edit this file to set URLs in one place**
- `assets/VLA_Rolling_OmniAI.pdf` — uploaded manuscript, opened by the **Paper (PDF)** button
- `assets/figures/Intro.pdf` / `Intro.svg` — original Figure 1 PDF and its web-ready SVG export
- `assets/figures/Overview.pdf` / `Overview.svg` — original Figure 4 PDF and its web-ready SVG export
- `assets/figures/` — Figures 2 (tail-reuse curves), 3 (adaptive-budget distribution), 5, and 6 are displayed from manuscript assets
- `assets/favicon.svg` — favicon
- `.nojekyll` — disable unnecessary Jekyll processing

All method descriptions, diagrams, benchmarks, numbers, and real-world examples are based on the uploaded manuscript. No fictional author identities or publication claims are used.

## View locally

You can open `index.html` directly in a browser. For a local HTTP server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Deploy to GitHub Pages

1. Review the manuscript, author list, and resource links before publishing.
2. Create a new **public** GitHub repository named `VLA-Rolling-site` under `chenbao123ww` (or another name you prefer). Keep your research code repo private if needed.
3. Upload **the contents** of this directory to the root of the new repo, so `index.html` is in the repository root. Or use git:

```bash
cd /mnt/nfs/share/hesicheng/VLA-Rolling-Project-Page
git init
git add .
git commit -m "Add VLA-Rolling project page"
git branch -M main
git remote add origin https://github.com/chenbao123ww/VLA-Rolling-site.git
git push -u origin main
```

4. In the new repository, select **Settings → Pages → Build and deployment → Deploy from a branch**, choose **main** and **/(root)**, and save.
5. After Pages builds, the expected URL is:

   `https://chenbao123ww.github.io/VLA-Rolling-site/`

GitHub Pages availability and publication settings can vary by account and repository visibility. The website uses only relative paths and works in a project-repository subpath.

## Update Paper / arXiv / GitHub / Hugging Face buttons

Edit **`site-config.js`**:

```js
window.VLARollingConfig = {
  paperPdf: "assets/VLA_Rolling_OmniAI.pdf",
  arxiv: "", // e.g. https://arxiv.org/abs/XXXX.XXXXX
  code: "https://github.com/chenbao123ww/VLA-Rolling",
  huggingface: "", // e.g. https://huggingface.co/username/model-name
};
```

The PDF button is already functional and opens the included manuscript. `arxiv` and `huggingface` are intentionally disabled until you supply real URLs. The Code button points to your **private** repository: only users with access can open it until you make it public.

## Update authors / status / citation

Update the hero author list, affiliation, correspondence, and the `#bibtex` element in `index.html` when the manuscript metadata changes. Author order currently follows the October 2026 PDF. Update all PDF links in `index.html` and `site-config.js` when replacing the PDF under a different filename.

## Manuscript-grounded content

- Hero facts: manuscript Abstract and Table 1 (p. 1 and p. 7).
- Overview: Figure 1 (p. 2); key question in Section 1.
- Method: Figure 4 (p. 5); stages in Section 3, pages 4–6.
- Tail reuse diagnostics: Figure 2, tail-reuse curves (p. 3), and Figure 3, optimal-step distribution (p. 4).
- Benchmarks: baseline and VLA-Rolling values from Table 1 (p. 7). Two X-VLA pairs see slight success-rate decreases; the site discloses this.
- Component ablation: Table 2 (p. 8), including its own baseline measurements and all five variants.
- Confidence analysis: Figure 5 (p. 9), including step differences and episode counts.
- Real-world experiment: Figure 6 (p. 9) and Table 4 (p. 9).

The October 2026 PDF's Table 1 updates the π₀.₅ MetaWorld baseline to 67.22 but still prints +9.32 for its success-rate change. The website calculates this difference from the displayed values: 67.88 − 67.22 = +0.66, consistent with the updated Table 2. The uploaded PDF is preserved unchanged.

**No tracking code, remote fonts, JavaScript frameworks, build tools, or external dependencies** are needed.

## Refresh the high-resolution diagrams

The SVGs preserve the uploaded PDFs' vector content and embedded images without redrawing. Regenerate them with:

```bash
pdftocairo -svg assets/figures/Intro.pdf assets/figures/Intro.svg
pdftocairo -svg assets/figures/Overview.pdf assets/figures/Overview.svg
```

The website displays the SVGs and links to the corresponding original PDFs.

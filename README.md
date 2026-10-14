# VLA-Rolling — Academic Project Page

A complete, dependency-free research project website generated from the manuscript **“VLA-Rolling: Fewer Denoising Steps, Better Control via Adaptive Action Reuse.”**

## Important: double-blind review

**The supplied PDF is marked “Under review as a conference paper at ICLR 2027” and “Anonymous authors / Paper under double-blind review.”** A public GitHub Pages website, especially one connecting the paper to your personal GitHub account, may reveal authorship and may be inconsistent with the venue's double-blind rules. **Confirm the current conference policy with your coauthors or program chairs before publicly deploying the site.** This template does *not* claim paper acceptance and intentionally uses anonymous citation metadata. A public page is not a private preview.

## Included

- `index.html` — full English academic project homepage
- `styles.css` — responsive layout and typography
- `script.js` — benchmark tabs, mobile navigation, BibTeX copy, resource-link states
- `site-config.js` — **edit this file to set URLs in one place**
- `assets/VLA-Rolling.pdf` — uploaded manuscript, opened by the **Paper (PDF)** button
- `assets/figures/` — original manuscript Figures 1, 2, 3, 4, 5, and 6 extracted from the PDF (Figure 5 retained as an asset for future expansion)
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

1. **Check double-blind disclosure rules before going public.**
2. Create a new **public** GitHub repository named `VLA-Rolling-Project-Page` under `chenbao123ww` (or another name you prefer). Keep your research code repo private if needed.
3. Upload **the contents** of this directory to the root of the new repo, so `index.html` is in the repository root. Or use git:

```bash
cd VLA-Rolling-Project-Page
git init
git add .
git commit -m "Add VLA-Rolling project page"
git branch -M main
git remote add origin https://github.com/chenbao123ww/VLA-Rolling-Project-Page.git
git push -u origin main
```

4. In the new repository, select **Settings → Pages → Build and deployment → Deploy from a branch**, choose **main** and **/(root)**, and save.
5. After Pages builds, the expected URL is:

   `https://chenbao123ww.github.io/VLA-Rolling-Project-Page/`

GitHub Pages availability and publication settings can vary by account and repository visibility. The website uses only relative paths and works in a project-repository subpath.

## Update Paper / arXiv / GitHub / Hugging Face buttons

Edit **`site-config.js`**:

```js
window.VLARollingConfig = {
  paperPdf: "assets/VLA-Rolling.pdf",
  arxiv: "", // e.g. https://arxiv.org/abs/XXXX.XXXXX
  code: "https://github.com/chenbao123ww/VLA-Rolling",
  huggingface: "", // e.g. https://huggingface.co/username/model-name
};
```

The PDF button is already functional and opens the included manuscript. `arxiv` and `huggingface` are intentionally disabled until you supply real URLs. The Code button points to your **private** repository: only users with access can open it until you make it public.

## Update authors / status / citation

The manuscript itself has **anonymous authors**. Update the hero byline and the `#bibtex` element in `index.html` **only when permitted by the review policy**. The default BibTeX is an anonymous under-review draft, not a publication record.

## Manuscript-grounded content

- Hero facts: manuscript Abstract and Table 1 (p. 1 and p. 7).
- Overview: Figure 1 (p. 2); key question in Section 1.
- Method: Figure 4 (p. 5); stages in Section 3, pages 4–6.
- Tail reuse diagnostics: Figures 2 and 3 (pp. 3–4).
- Benchmarks: exact values from Table 1 (p. 7). Two X-VLA pairs see slight success-rate decreases; the site discloses this.
- Real-world experiment: Figure 6 (p. 9) and Table 4 (p. 8).

**No tracking code, remote fonts, JavaScript frameworks, build tools, or external dependencies** are needed.

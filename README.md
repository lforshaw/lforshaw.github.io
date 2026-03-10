# lforshaw.github.io

Personal website for Luke Forshaw — [lforshaw.github.io](https://lforshaw.github.io)

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main website — all page content lives here |
| `style.css` | All visual styles |
| `script.js` | Minimal JavaScript (mobile nav, footer year) |
| `CONTENT.md` | Plain-language content reference for easy editing |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll (keeps things simple) |
| `README.md` | This file |

---

## Deploying to GitHub Pages

### First-time setup

1. Create a repository named exactly `lforshaw.github.io` on GitHub (it must match your username).
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/lforshaw/lforshaw.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your GitHub repo.
4. Under **Source**, select **Deploy from a branch → main → / (root)**.
5. Your site will be live at `https://lforshaw.github.io` within a minute or two.

### Updating content

1. Edit `index.html` (refer to `CONTENT.md` to find the right section quickly).
2. Commit and push:
   ```bash
   git add index.html
   git commit -m "Update bio"
   git push
   ```
   GitHub Pages rebuilds automatically. Changes appear within ~1 minute.

---

## Custom domain (optional)

To use a custom domain like `lukeforshaw.com`:

1. Create a file named `CNAME` in the repo root containing only your domain:
   ```
   lukeforshaw.com
   ```
2. In your DNS provider, add:
   - `A` records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a `CNAME` record pointing `www` → `lforshaw.github.io`
3. In GitHub repo **Settings → Pages**, enter your custom domain and enable **Enforce HTTPS**.

GitHub automatically provisions a free TLS certificate via Let's Encrypt.

---

## Security notes

- **No external dependencies.** No CDNs, no third-party scripts, no tracking pixels. Everything is self-contained — there is nothing that can be compromised via a supply chain attack.
- **Static HTML only.** No server, no database, no form processing. The attack surface is minimal.
- **HTTPS enforced** by GitHub Pages automatically (or enable it manually in repo Settings → Pages).
- **Security headers** that GitHub Pages does not allow setting via config (X-Frame-Options, X-Content-Type-Options) are included as `<meta>` tags in `index.html` as a best-effort fallback.
- **External links** all use `rel="noopener noreferrer"` to prevent tab-napping attacks.
- To add proper HTTP security headers (recommended), consider proxying through [Cloudflare](https://cloudflare.com) (free tier), which lets you set custom headers via Transform Rules.

---

## Making changes

**To update text:** Edit the relevant section in `index.html`. `CONTENT.md` maps every piece of text to its location.

**To change colors or fonts:** Edit the `:root` variables at the top of `style.css`.

**To add a new section** (e.g., publications, speaking engagements): See the template at the bottom of `CONTENT.md`.

**To remove the phone number:** In `index.html`, delete the `<li>` block that contains `203-365-8850`.

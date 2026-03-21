# Static portfolio (HTML + CSS + JavaScript)

Same content and styling as the React app, without Node/React for the **frontend**.

- **Contact form** still calls your **Render backend** (`/api/contact`). Keep the backend deployed and set CORS as before.

## Local preview

From this folder:

```bash
# Python 3
python -m http.server 8080
```

Open `http://localhost:8080` (needed so `fetch` and scripts work reliably).

## Regenerate `js/data.js` from React data

When you edit `frontend/src/data/portfolioData.ts`, regenerate:

```bash
# From repo root (Portfolio)
node -e "const fs=require('fs'); const lines=fs.readFileSync('frontend/src/data/portfolioData.ts','utf8').split(/\\r?\\n/); let body=lines.slice(28).join('\\n').replace(/^export const /gm,'const ').replace(/const projects: Project\\[\\] =/,'const projects =').replace(/const certifications: Certification\\[\\] =/,'const certifications =').replace(/const skillItems: SkillItem\\[\\] =/,'const skillItems ='); fs.writeFileSync('site/js/data.js', '/* Auto-generated */\\n'+body+'\\n\\nwindow.PORTFOLIO_DATA = { profile, projects, certifications, skillItems };\\n');"
```

Or copy the object by hand into `js/data.js`.

## Deploy

### Vercel (recommended)

1. Import the GitHub repo.
2. **Root Directory:** `site`
3. Framework: **Other** (static).
4. Build command: leave empty. Output: `.` (current directory).
5. Deploy.

Optional env in Vercel is **not** required for the static site unless you inject `window.API_BASE_URL` via a tiny build step. By default the contact form uses `https://portfolio-backend-33ii.onrender.com` in `js/contact.js`.

### GitHub Pages

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment**
3. **Source:** Deploy from branch, or use **GitHub Actions** static deploy.
4. If using “Deploy from branch”, set the folder to **`/site`** (or move `site` contents to `docs/` and use `/docs`).

**Note:** GitHub Pages hosts static files from your repo; it is not a replacement for a backend. The contact API still lives on Render.

### “Just GitHub”

Pushing to GitHub **does not** publish a website by itself. You still need **GitHub Pages**, **Vercel**, **Netlify**, or similar to **serve** the `site/` folder over HTTPS.

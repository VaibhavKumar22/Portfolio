# Vaibhav Kumar — Portfolio

Static single-page portfolio (`index.html` only). No backend required.

## Deploy on Vercel (from GitHub)

### 1. Push this folder to GitHub

If this repo is already connected to GitHub:

```bash
git add -A
git commit -m "Portfolio: static site for Vercel"
git push origin master
```

If you use `main` instead of `master`:

```bash
git branch -M main
git push -u origin main
```

**New repo?** Create one at [github.com/new](https://github.com/new), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add -A
git commit -m "Initial portfolio"
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. **Add New… → Project** → **Import** your GitHub repository.
3. Settings:
   - **Framework Preset:** Other (or “No framework”).
   - **Root Directory:** `./` (leave default).
   - **Build Command:** leave **empty**.
   - **Output Directory:** leave **empty** (Vercel serves the repo root).
4. Click **Deploy**.

Your site will be live at `https://YOUR_PROJECT_NAME.vercel.app`.

### Free URL / “domain” on Vercel (Hobby plan)

- Vercel gives you **`https://<project-name>.vercel.app`** at no extra cost — no registrar needed.
- **Project name** = first part of that URL. Pick something unique (e.g. `vaibhav-portfolio`). If the name is taken, try another until Vercel accepts.
- **Custom domains** (`yourname.com`): buy from a registrar, then **Project → Settings → Domains** in Vercel. Vercel does not sell free `.com` domains.

### 3. Keep the **same** Vercel link on every deploy

- Do **not** delete the Vercel project if you want to keep the same `*.vercel.app` URL.
- Every `git push` to the connected branch triggers a **new deployment** on the **same** project → **same production URL**.
- To use a **custom domain** (e.g. `yourname.com`): Project → **Settings → Domains** → add your domain and follow DNS steps.

### 4. Optional: Vercel CLI

```bash
npm i -g vercel
cd path/to/Portfolio
vercel
```

Follow prompts; link to the existing project if you already created it on the dashboard.

---

## Vercel: “Root Directory `frontend` does not exist”

This repo’s site lives at the **repository root** (`index.html`), not in a `frontend/` folder.

1. Vercel → your project → **Settings** → **General** → **Root Directory**.
2. **Clear** the field (empty = repo root). Remove `frontend`.
3. **Save**, then **Deployments** → **Redeploy**.

---

## Notes

- **Contact form** uses [FormSubmit](https://formsubmit.co) — works on static hosting; no server needed.
- **Resume** links use Google Drive — ensure sharing is “Anyone with the link” if viewers should open without signing in.

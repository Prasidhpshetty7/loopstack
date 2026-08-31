# Vercel Deployment — Quick Start

## 🚀 Deploy in 3 Steps

### Step 1: Push to Git (if not already done)

```bash
git init
git add .
git commit -m "chore: prepare for Vercel deployment"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click **Import** next to your repository
4. Click **Deploy** (accept all defaults)

### Step 3: Set Environment Variable

After deployment completes:

1. Copy your deployment URL (e.g., `https://your-project.vercel.app`)
2. Go to **Project Settings → Environment Variables**
3. Add:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: Your deployment URL (no trailing slash)
   - **Environments**: Production, Preview
4. Click **Save**
5. Go to **Deployments** tab and click **Redeploy** on the latest deployment

**Done!** Your site is live. 🎉

---

## What Was Configured?

The following files have been added for optimal Vercel deployment:

### ✅ `vercel.json`
- Security headers (XSS protection, frame options, content sniffing)
- Static asset caching for fonts and `_next/static/`
- Build configuration for Next.js 16

### ✅ `.vercelignore`
- Excludes documentation and AI config from deployment
- Keeps deployment size minimal and fast

### ✅ `DEPLOYMENT.md`
- Comprehensive deployment guide
- Environment variable configuration
- Troubleshooting tips
- Custom domain setup

---

## Optional: CLI Deployment

Prefer command line?

```bash
# Install Vercel CLI
npm i -g vercel@latest

# Login
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

---

## Need Help?

- Full guide: [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Project docs: [`obsidian/README.md`](./obsidian/README.md)

# Deployment Guide — Vercel

This guide covers deploying your Next.js 16 application to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 20.19+ installed locally

## Quick Deploy

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (one-time setup)
   ```bash
   npm i -g vercel@latest
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy preview**
   ```bash
   vercel
   ```
   This creates a preview deployment. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - What's your project's name? Press enter to use the folder name
   - In which directory is your code located? **./** (press enter)
   - Override settings? **N**

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Project**
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Import your repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `yarn build` (auto-configured)
   - **Output Directory**: `.next` (auto-configured)
   - **Install Command**: `yarn install` (auto-configured)
6. Click **Deploy**

## Environment Variables

### Required Variables

Set these in the Vercel dashboard under **Project Settings → Environment Variables**:

| Variable | Description | Example | Environment |
|----------|-------------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production domain (no trailing slash) | `https://yourdomain.com` | Production, Preview |
| `CONTACT_ENDPOINT` | Optional: CRM/webhook endpoint for contact form | `https://api.example.com/leads` | Production |

### Setting Environment Variables

**Via Vercel Dashboard:**
1. Go to your project on Vercel
2. Navigate to **Settings → Environment Variables**
3. Add each variable with appropriate values
4. Select which environments (Production, Preview, Development)
5. Click **Save**

**Via CLI:**
```bash
# Add a production-only variable
vercel env add NEXT_PUBLIC_SITE_URL production

# Add a variable for all environments
vercel env add CONTACT_ENDPOINT
```

**Pull environment variables locally:**
```bash
vercel env pull .env.local
```

## Post-Deployment Configuration

### 1. Update Site URL

After your first deployment, update `NEXT_PUBLIC_SITE_URL`:

1. Copy your production URL from Vercel (e.g., `https://your-project.vercel.app`)
2. Update the environment variable in Vercel dashboard
3. Redeploy or wait for the next automatic deployment

### 2. Custom Domain (Optional)

1. Go to **Project Settings → Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Follow DNS configuration instructions for your domain provider

Common DNS configurations:
- **Root domain** (example.com): Add A record pointing to Vercel's IP
- **Subdomain** (www.example.com): Add CNAME record pointing to `cname.vercel-dns.com`

### 3. Performance Optimization

The included `vercel.json` already configures:
- ✅ Security headers (XSS, frame protection, content sniffing)
- ✅ Static asset caching (fonts, `_next/static/`)
- ✅ Modern image formats (AVIF, WebP)

No additional configuration needed!

## Build Configuration

The project uses:
- **Build Command**: `yarn build`
- **Node Version**: 20.19+ (from `package.json` engines)
- **Output Directory**: `.next`
- **Install Command**: `yarn install`

These are automatically detected by Vercel. The `vercel.json` file provides additional optimizations.

## Excluded from Deployment

The `.vercelignore` file excludes:
- Documentation (`obsidian/`, `AGENTS.md`, `CLAUDE.md`)
- AI configuration (`.claude/`)
- Development files
- Git history

This keeps deployments lean and fast.

## Monitoring & Debugging

### View Deployment Logs

**Dashboard:**
1. Go to your project on Vercel
2. Click on a deployment
3. View **Build Logs** and **Function Logs**

**CLI:**
```bash
vercel logs [deployment-url]
```

### Common Issues

**Build fails with "Module not found"**
- Ensure all dependencies are in `package.json`, not just `devDependencies`
- Check import paths use the `@/` alias correctly

**Environment variable not working**
- Verify it's set in Vercel dashboard for the right environment
- For client-side variables, ensure it starts with `NEXT_PUBLIC_`
- Redeploy after adding/changing variables

**Images not loading**
- Check image paths are relative or use `next/image` component
- Verify images are in the `public/` directory

**Build succeeds but page shows error**
- Check Function Logs in Vercel dashboard
- Look for runtime errors in server components

## Automatic Deployments

Once connected via Git:
- **Push to main branch** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Automatic preview with unique URL

Each preview deployment gets a unique URL for testing before merging.

## Rollback

If a deployment has issues:

1. Go to project in Vercel dashboard
2. Click **Deployments** tab
3. Find previous working deployment
4. Click **⋯ → Promote to Production**

Or via CLI:
```bash
vercel rollback
```

## Additional Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables Guide](https://vercel.com/docs/environment-variables)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

## Performance Tips

1. **Enable Analytics**: Go to Analytics tab in Vercel dashboard
2. **Monitor Web Vitals**: Check Core Web Vitals scores
3. **Use Edge Functions**: For API routes that need global low latency
4. **Enable Image Optimization**: Already configured in `next.config.ts`
5. **Review Bundle Size**: Use Vercel's bundle analysis

---

## Summary Checklist

Before deploying:
- [ ] Project builds locally (`yarn build`)
- [ ] Environment variables identified
- [ ] Git repository created and pushed
- [ ] Vercel account created

During deployment:
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] First deployment successful

After deployment:
- [ ] `NEXT_PUBLIC_SITE_URL` updated with production URL
- [ ] Custom domain configured (if applicable)
- [ ] Test all pages and features
- [ ] Monitor first production traffic

Your Next.js 16 application is now live on Vercel! 🚀

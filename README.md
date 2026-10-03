# Sarang T — Portfolio

A clean, white professional portfolio built with Next.js for deployment on Vercel.

## Requirements

- Node.js 20 LTS (the project version is pinned in `.nvmrc`)
- Git

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Validate and build

```bash
npm run typecheck
npm run build
npm run start
```

## Publish to GitHub

From this project folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR-USERNAME/sarang-portfolio.git
git push -u origin main
```

Create the GitHub repository first, using the name `sarang-portfolio`. Do not add a second README or `.gitignore` during repository creation because those files already exist here.

A GitHub Actions workflow in `.github/workflows/ci.yml` automatically type-checks and builds the project on pushes and pull requests to `main`.

## Deploy to Vercel

1. Sign in to Vercel with GitHub.
2. Choose **Add New → Project**.
3. Import the `sarang-portfolio` repository.
4. Keep the detected framework as **Next.js**.
5. Leave the build settings at their defaults.
6. Select **Deploy**.

No environment variables are required for the current version of this portfolio. Vercel will create a preview URL for pull requests and a production deployment for `main`.

## Before publishing

- Replace the placeholder LinkedIn and GitHub URLs in `app/page.tsx` with your real profile links.
- Review the project descriptions for confidential information.
- Confirm that `public/Sarang-T-Resume.pdf` is the final resume you want to publish.

The downloadable resume is available at `/Sarang-T-Resume.pdf` after deployment.

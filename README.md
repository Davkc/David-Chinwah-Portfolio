# David Chinwah — Portfolio

Responsive, single-page React and TypeScript portfolio built with Vite and Tailwind CSS. There is no backend; the contact action opens an email in the visitor's mail app.

## Run locally

Requirements: Node.js 20 LTS (or a compatible current LTS) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy on Vercel (free Hobby plan)

1. Create a GitHub repository and push this project.
2. In Vercel, choose **Add New → Project**, import the repository, and keep the detected Vite settings: build command `npm run build`, output directory `dist`.
3. Deploy. Vercel provides a `*.vercel.app` address.
4. In the project **Settings → Domains**, add your domain. Follow Vercel's displayed DNS instructions at your domain registrar (usually an A record for the apex and/or a CNAME for `www`). Wait for DNS verification and TLS issuance, then set the primary domain.
5. Update `og:url` and both `og:image`/`twitter:image` values in `index.html` to use your real domain and public image URL.

No environment variables are required.

## Alternatives

### Netlify

1. Import the GitHub repository in Netlify.
2. Set build command to `npm run build` and publish directory to `dist`.
3. Deploy, then use **Domain management → Add a domain** and follow the DNS instructions Netlify shows. Netlify provisions HTTPS after DNS verification.

### GitHub Pages

For a repository site at `https://USERNAME.github.io/REPO/`, set Vite's `base` in `vite.config.ts` to `'/REPO/'` (replace `REPO` with the exact repository name). If using a user site at `https://USERNAME.github.io/`, the base can remain `/`. Add a GitHub Actions workflow to build with Node and publish the `dist` directory using GitHub Pages' artifact deployment, then enable Pages from **Settings → Pages → GitHub Actions**. For a custom domain, add it under Pages settings, create the DNS records GitHub displays at your registrar, and enable HTTPS after verification. Update canonical/social URLs when the site URL is final.

## Before launch

- Replace each `REPLACE-WITH-LIVE-URL.com`, `REPLACE-REPO`, and the Sukulu `REPLACE-WITH-PROJECT-LINK` in `src/data.ts` with real project links.
- Replace `[ADD ACCURATE DESCRIPTION]` for Global Tech Services in `src/data.ts` with a verified description.
- Add your CV as `public/David-Chinwah-CV.pdf` (or change `profile.cv` in `src/data.ts`).
- Replace the three SVG mockups in `public/images/` with real project screenshots. Update each project's `image` path and descriptive `alt` text in `src/data.ts` if you use another filename.
- Create and add a share image at `public/og-image.png`; use the deployed absolute URL in the social image tags in `index.html`. Replace `YOUR-DOMAIN.com` with the real domain.
- Check all profile and project URLs from the deployed site.

## Content and theme

All profile details, projects, work history, education and skill groups are in `src/data.ts`. The theme toggle defaults to the visitor's system preference, then stores the selection in local storage. Its class is set before the page renders to avoid a theme flash.

## After launch

1. Replace the mockups with real, crisp screenshots and add a brief project write-up or demo video where useful.
2. Add measurable, verifiable outcomes to case studies as you collect them.
3. Add a custom domain and a consistent Open Graph image, then test previews on LinkedIn before sharing.

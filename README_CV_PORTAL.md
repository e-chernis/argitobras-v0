# CV Portfolio - Deployment & Copilot Notes

This document explains how to build and publish this Jekyll-based CV portfolio and how to address the Copilot "model_not_supported" error.

Build & preview locally
```bash
bundle install
# Build
bundle exec jekyll build --source . --destination _site
# Serve with live reload
bundle exec jekyll serve --livereload --host 0.0.0.0
```

Publish to GitHub Pages
- Push the feature branch and create a PR or merge to `master`/`gh-pages` as your workflow requires:
```bash
git push origin feature/cv-portfolio
```
- In the repository Settings → Pages: select the branch (`gh-pages` or `master`) and the folder (`/` or `/docs`) and enable the site. If using a custom domain, add the `CNAME` file and enable Enforce HTTPS.

GitHub Copilot "model_not_supported" error
- Cause: the extension or integration attempted to use an unsupported model name. Can happen after breaking API changes or misconfiguration.
- Steps to fix:
  1. Update the GitHub Copilot extension in VS Code.
  2. Sign out and sign back in to GitHub (Command Palette: `GitHub: Sign out`).
  3. Disable Copilot temporarily: Extensions panel → GitHub Copilot → Disable, or set `github.copilot.enable` to `false` in `settings.json`.
  4. If using other automation (CI/job) that calls Copilot API, check the configured model name and set it to a supported model per GitHub docs.
  5. If problem persists, open a support ticket with GitHub including the Copilot Request id shown in the error.

Files created/edited
- `/_layouts/home.html` — custom home layout to show CV sections.
- `/_data/sitetext.yml` — updated with your personal content.
- `/_data/navigation.yml` — updated navigation entries.
- `/_config.yml` — updated site title and contact email.

Next steps you can ask me to do:
- Polish styling (colors, social links, photos).
- Add project pages under `_portfolio/` with images and descriptions.
- Push & open a PR on GitHub.

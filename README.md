# FindJosh Portfolio

A high-performance portfolio focused on frontend architecture, inclusive accessibility, and automated CI/CD.

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS with custom neon design system
* **Deployment:** Firebase Hosting
* **CI/CD:** GitHub Actions

## Architecture Decisions

### Static Export
The project uses `output: 'export'` to generate a strictly static build. This ensures maximum performance and security by serving assets via Firebase's global CDN. Image optimization is managed at the source to maintain efficiency without a Node.js runtime.

### CI/CD Pipeline
The repository includes automated workflows for quality control and deployment:
* **Preview Channels:** Automated staging environments for PRs to facilitate mobile testing.
* **Production Deployment:** Triggered on merge to main, including linting gates and build optimization.

---
Built with <3 by Josh — 2026
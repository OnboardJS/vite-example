**Cut it in half.** This README is a documentation site disguised as a quick start. Users landing here from your "meta onboarding" want to **clone and run**, not read an integration guide.

Here’s the brutal edit:

---

# OnboardJS Vite Starter

**Linear-style onboarding for React apps.** One command to clone, one click to deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/OnboardJS/onboardjs-react)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/OnboardJS/onboardjs-react)

![Demo](./public/demo.gif)

A production-ready starter with **Vite + React Router + Tailwind + ShadCN**, featuring a complete 7-step onboarding flow (workspace setup, team invites, GitHub integration, etc.).

## Quick Start

```bash
git clone https://github.com/OnboardJS/onboardjs-react my-app
cd my-app && pnpm install
pnpm dev
```

**[View Live Demo](https://vite.onboardjs.com)** • **[Documentation](https://onboardjs.com/docs)**

## What's Included

- ✅ Headless OnboardJS integration (modals, tooltips, inline steps)
- ✅ TypeScript-native state management
- ✅ Persistence hooks (localStorage + Supabase-ready)
- ✅ Analytics tracking (optional, see below)
- ✅ ShadCN UI components (fully customizable)

## Enable Analytics (Optional)

Sign up free at [onboardjs.com](https://onboardjs.com) to track completion rates and drop-offs:

```bash
cp .env.example .env.local
# Add your API key from the dashboard
```

---

**If this saves you time, consider starring the repo** ⭐

Built with OnboardJS. MIT License.

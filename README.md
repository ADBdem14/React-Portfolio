# Aaron's React Portfolio

A modern portfolio built with React + Vite, designed for class presentations, events, and hiring showcases.

## What was improved

- Cleaner visual system (dark gradient theme, cards, responsive grid).
- Better information architecture (clear hero/about/skills/projects/contact sections).
- Centralized content in one file (`src/data/portfolioData.js`) so updates are fast.
- AI portfolio assistant with:
  - Fallback mode (works with no API key).
  - Live OpenAI mode (optional when `VITE_OPENAI_API_KEY` is set).
  - Quick prompts and contextual answers.

## Quick start

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## How to add your own information quickly

Open `src/data/portfolioData.js` and edit:

- `name`, `title`, `headline`
- `about`, `education`, `location`
- `email`, `phone`
- `skills` array
- `projects` array (description, outcomes, tech, link, status)
- `social` links (GitHub/LinkedIn/etc.)
- `assistant` text/tips for fallback mode

This single file drives the visible portfolio and most chat assistant answers.

## AI chatbox setup (with and without API key)

### Option A: No API key (recommended for now)

No setup needed. The assistant runs in fallback mode and answers from your portfolio data.

### Option B: Add API key later

1. Create a `.env` file in the project root.
2. Add:

```bash
VITE_OPENAI_API_KEY=your_api_key_here
```

3. Restart the dev server.
4. Open the chatbox. The mode pill should say: **Live AI enabled**.

Optional: use a custom gateway endpoint.

```bash
VITE_OPENAI_BASE_URL=https://your-backend-or-gateway/chat
```

> Security note: for production, do not expose API keys in the browser. Use a backend endpoint.

## GitHub PR / seeing changes

- If you are in GitHub and see a **Create PR** button, click it to open the pull request page for review.
- If you do not see the latest commit yet, refresh the branch page and confirm you are on the same branch where the commit exists.
- In local development, running `git log --oneline` confirms whether the new commit is already present.

## Suggested next steps

1. Replace placeholder project card with your strongest class project.
2. Add project screenshots and measurable outcomes.
3. Add resume download link and deployed project URLs.
4. Move chat API calls to a backend (Express/Serverless) for security.
5. Add analytics and simple contact form validation.

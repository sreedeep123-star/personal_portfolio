# Papireddy Sreedeep Reddy — Portfolio

Personal portfolio website for Papireddy Sreedeep Reddy, AI/ML undergraduate from Hyderabad.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** — build tool
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **Radix UI** — accessible primitives
- **Wouter** — routing

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5000
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deploying to Vercel

Import this repo on [vercel.com](https://vercel.com) — it picks up `vercel.json` automatically.  
No extra configuration needed.

## Adding Content

### Certificates
Drop images into `public/certificates/`:
- `cert-1.jpg` → AI & Cloud Technology (AICTE & Edunet)
- `cert-2.jpg` → Gen AI Exchange Program (Hack2Skill)
- `cert-3.jpg` → Data Visualization (IBM)
- `cert-4.jpg` → SQL and Relational Databases (IBM)

### Projects
Edit `src/components/Projects.tsx` and add an object to the `projects` array:

```ts
{
  id: "unique-id",
  title: "Project Title",
  tags: ["Tag1", "Tag2"],
  context: "What the project does and why it matters.",
  highlight: "Key achievement or metric",
  category: "ML / AI" | "Generative AI" | "Web Dev",
}
```

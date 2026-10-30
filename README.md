# Advanced Python Programming — Semester Portfolio

A responsive React/Vite portfolio with a searchable library of **10 original PDF assignments**. Every assignment card opens the corresponding PDF in a new browser tab. Includes floating navigation, activity checklist placeholders, and a learning reflection section.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this entire folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**; build command: `npm run build`; output directory: `dist`.
4. Deploy. PDF links work automatically because originals are stored under `public/assignments/`.

## Customize

- `src/data.js`: edit assignment titles and descriptions, or update evidence items.
- `src/main.jsx`: layout, content, navigation, and interactive assignment gallery.
- `src/styles.css`: colors, typography, spacing, responsive styling.
- `public/assignments/assignment-01.pdf` through `assignment-10.pdf`: original documents.

**Important:** Uploaded PDF covers identify **Salva Soumya (23MID0061)**. The site deliberately avoids putting a student name in the hero until ownership and the desired name are confirmed. Ten faculty checklist items are visible as placeholders and are NOT represented as submitted evidence.

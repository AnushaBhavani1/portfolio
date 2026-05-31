# React Portfolio

## Setup (run these commands in order)

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Pages & Routes
- `/`           → Home
- `/about`      → About
- `/skills`     → Skills
- `/projects`   → Projects
- `/internship` → Internship
- `/contact`    → Contact

## Customize
1. Replace `Your Name` in Navbar.jsx, Home.jsx, Footer.jsx
2. Add your photo: place `photo.jpg` in `/public/`, then in Home.jsx replace `YN` with:
   `<img src="/photo.jpg" alt="Your Name" />`
3. Edit projects in `src/pages/Projects.jsx`
4. Edit internship in `src/pages/Internship.jsx`
5. Update social links in `src/pages/Contact.jsx`

## Deploy
```bash
npm run build
# upload the /dist folder to Vercel, Netlify, or any host
```

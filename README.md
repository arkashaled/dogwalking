# דוגווקינג תל אביב — Dog Walker Site

אתר one-page לעסק דוגווקינג ודוגסיטינג בתל אביב, בנוי עם Next.js App Router, TypeScript ו-Tailwind CSS.

## הפעלה מהירה / Quick Start

```bash
npm install
npm run dev
```

פתחו את הדפדפן על `http://localhost:3000`.

---

## היכן להחליף את קישור ה-Calendly / Calendly URL

ערכו את הקובץ `lib/config.ts`:

```ts
export const CALENDLY_URL = "https://calendly.com/REPLACE-ME";
//                                               ^^^^^^^^^^
//                                        החליפו את זה בשם המשתמש שלכם
```

---

## תמונות / Images

הניחו את קבצי התמונות בתיקייה `public/images/` עם שמות הקבצים הבאים:

| קובץ | שימוש |
|------|-------|
| `hero.jpg` | תמונת רקע של ה-Hero (כלב ברחוב תל אביב) |
| `dogwalking.jpg` | סקשן שירות דוגווקינג |
| `dogsitting-home.jpg` | סקשן דוגסיטינג בבית הלקוח |
| `dogsitting-my-place.jpg` | סקשן דוגסיטינג בבית הדוגסיטר |

גודל מומלץ: לפחות 1200×900px. JPG או WebP.

האתר פועל גם ללא התמונות — יוצג רקע ירוק-כחול/אפור.

---

## מבנה הפרויקט / Project Structure

```
dogwalker-site/
├── app/
│   ├── globals.css      # Tailwind directives + smooth scroll
│   ├── layout.tsx       # Root layout (RTL, Heebo font, SEO)
│   └── page.tsx         # Main page — composes all sections
├── components/
│   ├── CTAButton.tsx    # Reusable amber CTA button → Calendly
│   ├── Hero.tsx         # Full-viewport hero section
│   ├── ServicesOverview.tsx  # Two-card overview section
│   ├── ServiceSection.tsx    # Reusable image+text section
│   └── Footer.tsx       # Dark footer with contact info
├── lib/
│   └── config.ts        # CALENDLY_URL constant
├── public/
│   └── images/          # Place your photos here
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

---

## Build & Deploy

```bash
npm run build   # production build
npm run start   # start production server
```

Deploy easily on [Vercel](https://vercel.com) — connect the repo and it deploys automatically.

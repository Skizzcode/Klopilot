# KloPilot — Claude Code Project Memory

> Lies diese Datei komplett bevor du irgendetwas tust.
> Aktualisiere sie am Ende jeder Session mit `/memory`.

---

## Projekt-Übersicht

**Produkt:** KloPilot — B2B SaaS Dispo-App für mobile Toilettenvermieter  
**Stack:** Next.js 14, TypeScript, Tailwind CSS  
**Zielgruppe:** Kleine Familienbetriebe, 1–5 Fahrer, 20–150 Kabinen  
**Pricing:** 149€ Setup + 79/149/249€/Monat  

---

## Seiten-Struktur

| Route | Beschreibung | Rolle |
|-------|-------------|-------|
| `/` | Landingpage | öffentlich |
| `/demo` | Demo-Hub | öffentlich |
| `/dashboard` | Büro-Dashboard | Büro |
| `/toilets/[id]` | Kabinen-Detail + QR | Büro |
| `/driver` | Tour-Übersicht | Fahrer (mobil) |
| `/driver/job/[id]` | Job-Detail | Fahrer (mobil) |
| `/report` | Tagesbericht | Büro |

---

## Design-System

**Farben:**
- Brand Primary: `#1D9E75` (Teal) = `brand-500`
- Brand Dark: `#1A1A2E` = Texte, Icons
- Gefahr: `rose-*`
- Warnung: `amber-*`
- Erfolg: `emerald-*`

**Komponenten-Regeln:**
- Cards: `rounded-[2rem]` groß, `rounded-[1.75rem]` klein
- Schatten: nur `shadow-soft` (kein shadow-lg etc.)
- Buttons: primary=brand-500, danger=rose-50/rose-700
- Badges: StatusChip-Komponente in `components/StatusChip.tsx`

**Logos in `/public/logo/`:**
- `logo1.svg` → hell (heller Hintergrund)
- `logo2.svg` → dunkel (dunkler Hintergrund / Dark Mode)
- `logo3.svg` → App Icon 512px Teal
- `logo4.svg` → App Icon 512px Dark
- `logo5.svg` → Navbar kompakt Teal (Fahrer-App)

---

## Dark Mode — KRITISCHE REGEL

**Das ist der Haupt-Bug: Dark Mode funktioniert nicht konsistent.**

Ursache: Tailwind Dark Mode braucht `darkMode: 'class'` in `tailwind.config.ts`
UND die `dark`-Klasse muss auf dem `<html>` Element sitzen.

**Fix-Checkliste:**
1. `tailwind.config.ts` → `darkMode: 'class'` setzen
2. `app/layout.tsx` → ThemeProvider einbauen der `dark` Klasse auf `<html>` setzt
3. Jede Seite: `dark:bg-slate-900` auf `<main>`, `dark:text-white` auf Headings
4. Alle Cards: `dark:bg-slate-800 dark:border-slate-700`
5. Alle Texte: `dark:text-slate-300` für secondary, `dark:text-white` für primary

**ThemeProvider Pattern:**
```tsx
// components/ThemeProvider.tsx
'use client'
import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark')
    }
  }, [])
  return <>{children}</>
}
```

In `app/layout.tsx`:
```tsx
<html lang="de" suppressHydrationWarning>
  <body>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
```

---

## Pexels API — Bilder einbinden

**API Key:** in `.env.local` als `PEXELS_API_KEY`

**Verwendung:**
```ts
// lib/pexels.ts
export async function getPexelsImage(query: string) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1&orientation=landscape`,
    { headers: { Authorization: process.env.PEXELS_API_KEY! } }
  )
  const data = await res.json()
  return data.photos[0]?.src?.large2x ?? null
}
```

**Bilder-Queries für KloPilot:**
- Hero Landingpage: `"construction site worker"` oder `"logistics truck germany"`
- Dashboard Background: `"modern office desk minimal"`
- Fahrer-App: `"delivery driver mobile phone"`

**WICHTIG:** Pexels-Bilder nur server-side fetchen (API Key nicht im Client exponieren).
Nutze `getServerSideProps` oder Server Components.

---

## Redesign-Richtlinien — High Elegance

Das neue Design soll wirken wie: **Linear.app meets deutsche Handwerks-Seriosität**

**Was das bedeutet:**
- Viel Weißraum — weniger ist mehr
- Große, mutige Typografie (font-size 5xl–7xl für Headlines)
- Subtle Gradients erlaubt: `from-brand-500/10 to-transparent`
- Pexels-Bilder mit Overlay: `bg-black/40` darüber für Lesbarkeit
- Animationen: nur `transition-all duration-300` — kein Overdone
- Glassmorphism für Cards auf Bild-Hintergründen: `bg-white/80 backdrop-blur-md`

**Landingpage neu:**
1. Hero: Vollbild Pexels-Bild (Baustelle/LKW), Overlay, großer weißer Text
2. Problem-Sektion: 3 Karten mit Emoji + konkretem Schmerz
3. Demo-Video Placeholder (später echtes Video)
4. Pricing-Tabelle: 3 Spalten, mittlere hervorgehoben
5. CTA: Teal Button "Pilotbetrieb werden"

---

## Was fertig ist ✅

- Alle 7 Seiten als Demo-Prototyp
- Mock-Daten in `lib/mockData.ts`
- **Dark Mode konsistent über ALLE Seiten** (`/`, `/demo`, `/dashboard`, `/toilets/[id]`, `/driver`, `/driver/job/[id]`, `/report`)
- **Dark-Mode-Toggle (Sonne/Mond) in der Navbar oben rechts** — `components/theme-toggle.tsx`, eingebaut in `Navbar` + `NavbarMobile` (tone="onBrand"); floating Button aus `layout.tsx` entfernt
- **Navbar + NavbarMobile** mit Logo (logo1/logo2 hell/dunkel, logo5 für Fahrer) auf allen Seiten
- **Landingpage Redesign (High Elegance)**: Pexels-Hero (80vh, bg-black/50 Overlay), Problem-Sektion (3 Emoji-Karten), Wie-es-funktioniert (3 Schritte), Pricing (3 Spalten, Medium hervorgehoben), CTA-Sektion (#1A1A2E) mit Kontakt-Formular
- **Pexels-Integration**: `lib/pexels.ts` (`getPexelsImage`, server-side, Fallback-Gradient wenn kein Key/Fetch fehlschlägt), Key in `.env.local`
- **ContactForm** Client-Komponente (`components/ContactForm.tsx`)
- StatusChip, MockQRCode Komponenten
- Logo-Paket in `/public/logo/`
- `next build` läuft sauber durch (8 Routen)
- **Bugfix Report Dark Mode**: `brand-950` existiert nicht in der Palette → `dark:bg-slate-700` / `dark:bg-slate-600` für das CTA-Widget in `/report`

## Was offen ist ❌

- [ ] Dashboard/Demo weiter im neuen Eleganz-Stil verfeinern (optional)
- [ ] Login (Supabase Auth)
- [ ] Echter QR-Scanner
- [ ] Foto-Upload
- [ ] PDF Export (aktuell nur Button-Platzhalter in `/report`)
- [ ] Echtes Demo-Video statt Platzhalter

---

## Wichtige Regeln für Claude Code

1. KEINE großen Refactors — gezielte Änderungen
2. Mock-Daten in `lib/mockData.ts` NICHT anfassen
3. Nach jeder Änderung: alle betroffenen Seiten testen
4. Dark Mode: IMMER `dark:` Prefix mitdenken
5. Mobile: Fahrer-Seiten müssen auf 375px perfekt sein
6. `suppressHydrationWarning` auf `<html>` wegen ThemeProvider
7. Pexels API Key NIEMALS im Client-Code
8. Nur Farben aus der Palette verwenden (brand-50 bis brand-900) — `brand-950` existiert NICHT
9. Tailwind arbitrary values (`h-[80vh]`, `bg-[#hex]`, `leading-[x]`) → besser inline `style={}` für kritische Layout-Werte, da JIT diese erst nach Dev-Server-Neustart kompiliert

---

## Session-Ende Protokoll

Führe am Ende jeder Session aus:
```
/memory
```
Und aktualisiere die Sektion "Was fertig ist" und "Was offen ist".

# KONTEXT.md - KloPilot Projekt-Gedächtnis

## Letzte Änderungen
- [2026-06-03] Navbar-Komponente erstellt mit Logo hell/dunkel. [components/Navbar.tsx]
- [2026-06-03] Logo in alle 6 Hauptseiten eingebaut: `/`, `/demo`, `/dashboard`, `/toilets/[id]`, `/driver`, `/report`. [app/page.tsx], [app/demo/page.tsx], [app/dashboard/page.tsx], [app/toilets/[id]/page.tsx], [app/driver/page.tsx], [app/report/page.tsx]
- [2026-06-03] Favicon und Apple Icon gesetzt. [app/layout.tsx], [public/logo/logo3.svg]
- [2026-06-03] OG Image für Landingpage gesetzt. [app/page.tsx], [public/logo/logo3.svg]
- [2026-06-03] Fahrer-App Navbar mobil eingebaut mit logo5.svg und Teal-Hintergrund. [components/Navbar.tsx], [app/driver/page.tsx], [app/driver/job/[id]/page.tsx]
- [2026-06-03] SVGs nach `/public/logo/` kopiert: logo1.svg, logo2.svg, logo3.svg, logo4.svg, logo5.svg. [public/logo/]
- [2026-06-03] Brand-Farben auf Teal #1D9E75 geändert und globale Akzentverläufe angepasst. [tailwind.config.ts], [app/globals.css]
- [2026-06-03] Dashboard-Probleme-Karte rot hervorgehoben. [app/dashboard/page.tsx]
- [2026-06-03] Status-Badges nach Statusfarben aufgewertet, inklusive orange für "service fällig". [components/StatusChip.tsx]
- [2026-06-03] Kabinen-Detailseite nutzt StatusChip-Automapping; Action-Button-Hierarchie ist für Service, Defekt und Standardaktionen gesetzt. [app/toilets/[id]/page.tsx]
- [2026-06-03] Demo-Hub mit größeren Karten, h-8/w-8 Icons, längeren Beschreibungen und prominenten CTAs aufgewertet. [app/demo/page.tsx]
- [2026-06-03] ThemeProvider serverfest gemacht, damit Next-Prerendering nicht an localStorage scheitert. [lib/theme-provider.tsx]
- [2026-06-03] Build und Seitenchecks ausgeführt: `npm.cmd run build` erfolgreich; HTTP 200 für `/`, `/demo`, `/dashboard`, `/toilets/WC-042`, `/driver`, `/driver/job/WC-042`, `/report` sowie `/logo/logo1.svg` bis `/logo/logo5.svg`.

## Aktueller Stand
- Fertig: Landingpage, Demo-Hub, Büro-Dashboard, Kabinen-Detailseite, Fahrer-Tour, Fahrer-Job-Detail und Tagesbericht als Demo-Prototyp mit Mock-Daten.
- Fertig: Navbar-Logos nach Vorgabe: normale Seiten nutzen logo1/logo2, Fahrer-App nutzt logo5, Favicon/OG nutzen logo3.
- Fertig: Priorität 1 für Kundengespräch - Teal-Brand, rote Problemkarte, Logo-Navbar, Status-Badges, Kabinen-Aktionsbuttons und stärkerer Demo-Hub.
- Noch fehlt: Login-System mit Büro/Fahrer-Rollen, echter QR-Code-Scanner, Foto-Upload, Offline-Checkliste, PDF-Export, Erinnerungen/Alerts und Supabase/echte Datenbank.

## Offene Fragen / Bugs
- Keine bekannten Bugs nach Build und HTTP-Seitentests.
- `next build` meldet nur die Standard-Warnung, dass keine `metadataBase` für relative OpenGraph-Images gesetzt ist.

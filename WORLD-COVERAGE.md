# World coverage (195 × 195) – what is real

## What the product does now
- **Origin:** any of 196 countries (nationality/passport)
- **Destination:** any of 196 countries
- **Student routes:** Country of education (defaults to origin nationality)
- **Rich checklists:** when destination is in the detailed DB (UK, US, Schengen, CA, AU, Gulf, etc.), full structured docs are used and **origin-specific** identity lines are injected
- **Other pairs:** corridor-specific document packs (origin + destination + visa class + official portal link), not a single global stub
- **Scraper:** official immigration portals for many destinations + study sources; results in `data/live-data.json`

## What is not possible as “full scraped law text for every pair”
There are ~196 × 196 ≈ **38,000** nationality–destination pairs, times several visa classes ≈ **100,000+** combinations.
No free daily job can download and legally republish full immigration rules for all of them.

## How we still avoid “generic only”
1. Every checklist names **both** countries and visa class
2. Destination **official portal** is attached when known (`WORLD_IMMIGRATION_PORTALS` + scrape)
3. Detailed DB rules used whenever destination is covered
4. Student packs separate **nationality** vs **education country**
5. Scraper grows destination portals over time; live JSON feeds research signals

## Files
- `countries.js` – world list + portals
- `global-app.js` – origin/destination/education logic
- `index.html` – UI selects
- `scripts/scrape-daily.js` – expanded portals

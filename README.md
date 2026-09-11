# Swish Housekeeping website

Static HTML/CSS/JS site prepared for GitHub → CloudCannon → Cloudflare Pages.

## Pages
- `index.html` — Home
- `services.html` — Services
- `about.html` — About Swish
- `team.html` — Team
- `contact.html` — Enquiry/contact
- `privacy.html` — starter privacy page (must be checked against Sarah's real data use before launch)

## Before launch
1. Replace placeholder email `hello@swishhousekeeping.example` everywhere with Sarah's actual business email.
2. Connect the form in `contact.html`. It currently uses `action="#"` so it does not send data anywhere.
3. Confirm service area and add it to the pages if Sarah wants this published.
4. Confirm whether "qualified and insured" is the exact wording Sarah wants to publish and what qualifications it refers to.
5. Confirm photo permissions for every person pictured.
6. Review the privacy page after selecting the enquiry form provider, analytics, cookies and hosting/domain setup.
7. Add the final live domain to canonical/meta tags if wanted.

## CloudCannon
`cloudcannon.config.yml` is included and page copy uses `class="editable"` in the same broad static-site pattern as Exeter Tech Solutions.

## Cloudflare Pages
No build command is required. Publish the repository root as a static site.

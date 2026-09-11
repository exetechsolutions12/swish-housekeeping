# Swish Housekeeping — setup guide

This build uses the same broad pattern as the Exeter Tech Solutions site: plain HTML pages, one shared CSS file, one shared JavaScript file, images in `assets/images`, and CloudCannon editable regions.

## 1. Put the files in GitHub

Create a new GitHub repository, for example `swish-housekeeping`.

Upload **the contents of this folder** to the repository root, not the ZIP itself. `index.html` should sit at the top level of the repository.

Suggested structure:

```text
swish-housekeeping/
  index.html
  services.html
  about.html
  team.html
  contact.html
  privacy.html
  cloudcannon.config.yml
  _headers
  robots.txt
  assets/
    css/styles.css
    js/main.js
    images/...
```

If using Git locally:

```bash
git init
git add .
git commit -m "Initial Swish Housekeeping website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/swish-housekeeping.git
git push -u origin main
```

## 2. Connect the repository to CloudCannon

In the Exeter Tech Solutions CloudCannon organisation:

1. Create a new Site (or Project + Site if you are using Projects).
2. Choose GitHub as the file source.
3. Select the `swish-housekeeping` repository.
4. Select the `main` branch.
5. Create/sync the site.
6. Keep the site in the Exeter Tech Solutions Partner organisation unless you later decide Sarah needs her own separate organisation/billing.

The included `cloudcannon.config.yml` defines editable behaviour. Main text elements also use `class="editable"` so the copy can be made easy to change in CloudCannon.

After CloudCannon is connected, edits made in CloudCannon should commit back to GitHub; changes pushed to GitHub should sync into CloudCannon.

## 3. Connect GitHub to Cloudflare Pages

In Cloudflare:

1. Go to **Workers & Pages**.
2. Create a Pages application and import the existing GitHub repository.
3. Select `swish-housekeeping`.
4. Production branch: `main`.
5. This is a static HTML site, so there is no framework build. A no-op build such as `exit 0` can be used if Cloudflare asks for one.
6. The build output is the repository root because `index.html` is in the root. Use the root/current directory setting offered by the Cloudflare UI.
7. Deploy. Cloudflare will give you a `*.pages.dev` preview/live URL.

Every future GitHub commit should trigger a new Cloudflare Pages deployment.

## 4. Domain later

Do not move Sarah's domain until the site is approved. When ready, add the custom domain in Cloudflare Pages and then update the domain's DNS as instructed by Cloudflare.

Keep the domain registered to Sarah/Swish, not to Exeter Tech Solutions personally.

## 5. Things to confirm before public launch

- Sarah's actual business email address.
- The areas Swish serves.
- Whether the exact public wording should be “qualified & insured”, and what qualification/accreditation wording she wants displayed.
- Names/roles/biographies for team members if the Team page will identify people.
- Permission from each person appearing in supplied photos to publish them on the website.
- Contact-form provider. The form is intentionally disabled in this draft rather than sending customer information to an unapproved third party.
- Privacy wording after the form provider/analytics/cookies are known.
- Any prices, opening hours, cancellation policy or minimum booking details Sarah wants public.

## 6. Contact form

The draft form currently has:

```html
<form action="#" method="post" data-enquiry-form>
```

That means it **does not send anything yet**. Once Sarah confirms where enquiries should go, connect the same form service you want to use for client sites (for example the same provider/process used on the ETS site) and update the privacy notice accordingly.

## 7. Main files to edit

- Brand colours/layout: `assets/css/styles.css`
- Mobile menu/basic behaviour: `assets/js/main.js`
- Homepage copy: `index.html`
- Services: `services.html`
- Sarah/business story: `about.html`
- Team content: `team.html`
- Enquiry page: `contact.html`
- CloudCannon editing configuration: `cloudcannon.config.yml`

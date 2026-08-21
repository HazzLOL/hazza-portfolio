# Hazza Roblox Developer Portfolio

A static portfolio prepared for GitHub Pages and `hazza-rblx.com`.

## 1. Personalise the site

Open `index.html` and replace:

- `YOUR-EMAIL@example.com`
- `YOUR_USERNAME`
- `YOUR_USER_ID`
- Any project names or descriptions you want to change

Add your videos to `videos/` using these filenames:

- `football-system.mp4`
- `combat-system.mp4`
- `movement-system.mp4`

Missing videos show a clean placeholder instead of a broken player.

## 2. Publish with GitHub Pages

1. Create a new public GitHub repository, such as `hazza-portfolio`.
2. Upload every file and folder from this project to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. In **Custom domain**, enter `hazza-rblx.com` and save.

The included `CNAME` file already contains the correct domain.

## 3. Configure DNS

At your domain registrar, remove conflicting parking/default records and add these four records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

To make `www.hazza-rblx.com` redirect to the main domain, also add:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. Do not add the repository name to this value.

If using Cloudflare DNS, set these GitHub records to **DNS only** (grey cloud) while GitHub verifies the domain. Do not create a wildcard (`*`) DNS record.

## 4. Enable HTTPS

DNS changes can take up to 24 hours. When GitHub's DNS check succeeds, return to **Settings → Pages** and enable **Enforce HTTPS**.

## Recommended security step

Verify the domain in your GitHub account under **Settings → Pages** before pointing its DNS to GitHub. GitHub recommends verification to reduce domain-takeover risk.

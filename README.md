# Mynzo Carbon – Next.js + Payload CMS

This is the full Mynzo Carbon website converted to **Next.js 15** (App Router) with **Payload CMS v3** for blog management.

---

## Step 1: Install Node.js

If you don't have Node.js installed:

1. Go to **https://nodejs.org**
2. Click the big green **LTS** button to download
3. Open the downloaded file and follow the installer
4. Restart your computer once done

To check it worked, open **Terminal** (Mac) and type:
```
node --version
```
You should see something like `v20.x.x`

---

## Step 2: Copy your media files

Copy all images and videos from your current `Website-Mynzo` folder into the `public/` folder inside `mynzo-nextjs/`. These include:

- `hero_video.mp4`
- `satellite_remote_sensing.mp4`, `machine_learning_models.mp4`, `tree_analysis.mp4`, `temporal_insight.mp4`
- `Asset_analysis.png`, `asset_control.png`, `Asset_management.png`
- `solutions_for_stakeholders.png`, `mynzo_logo.png`, `reni_logo.JPG`
- All team photos: `James_abraham.png`, `Tanya_singhal.png`, etc.
- Blog images: `height_tree_jpg.jpeg`, `leaf_tree_jpg.jpeg`, `tree_trunk_jpg.jpeg`

---

## Step 3: Set up environment variables

1. In the `mynzo-nextjs` folder, find the file `.env.example`
2. Make a copy of it and rename the copy to `.env`
3. Open `.env` and change `PAYLOAD_SECRET` to any long random string (e.g. `mynzo-super-secret-2025-xkq9`)

The file should look like:
```
PAYLOAD_SECRET=mynzo-super-secret-2025-xkq9
DATABASE_URI=file:./mynzo.db
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Step 4: Install dependencies

Open **Terminal**, navigate to the `mynzo-nextjs` folder, and run:

```bash
cd ~/Desktop/mynzo-nextjs
npm install
```

This will download all required packages (takes 2–5 minutes on first run).

---

## Step 5: Run the website locally

```bash
npm run dev
```

Open your browser and go to **http://localhost:3000**

You should see the full Mynzo website!

---

## Step 6: Access the CMS (blog admin)

Go to **http://localhost:3000/admin**

On first visit, it will ask you to create an admin account. Use any email and password — this is just for your local machine.

### Publishing a blog post:

1. Click **Posts** in the left sidebar
2. Click **Create New**
3. Fill in the title, category, excerpt, and body content
4. Upload a cover image
5. Set **Status** to **Published**
6. Click **Save**

Your new post will appear automatically on the website's blog page!

---

## Step 7: Deploy to Vercel (go live)

1. Go to **https://vercel.com** and sign up with your GitHub account
2. Push your `mynzo-nextjs` folder to a GitHub repository
3. In Vercel, click **Add New Project** → import your GitHub repo
4. Under **Environment Variables**, add the same variables from your `.env` file
5. Click **Deploy**

Vercel will build and host your site automatically. You'll get a live URL like `https://mynzo-carbon.vercel.app`.

> **Note on the database:** The SQLite database (`mynzo.db`) lives locally on your machine when developing. For production on Vercel, you'll need to upgrade to a hosted database. The easiest option is [Turso](https://turso.tech) (free tier available) — swap `@payloadcms/db-sqlite` for `@payloadcms/db-turso` and update the `DATABASE_URI` in Vercel's environment variables.

---

## Project Structure

```
mynzo-nextjs/
├── public/                    ← All images, videos, logos go here
├── src/
│   ├── app/
│   │   ├── (frontend)/        ← Public website pages
│   │   │   ├── page.tsx       ← Home page
│   │   │   ├── get-started/   ← Get Started form
│   │   │   ├── blog/          ← Blog listing + individual posts
│   │   │   ├── privacy-policy/
│   │   │   ├── terms-of-use/
│   │   │   ├── data-processing/
│   │   │   └── cookie-policy/
│   │   └── (payload)/         ← CMS admin panel (auto-managed)
│   ├── collections/
│   │   ├── Posts.ts           ← Blog post schema
│   │   ├── Media.ts           ← Image uploads
│   │   └── Users.ts           ← CMS users
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── LegalPage.tsx
│   ├── styles/
│   │   └── globals.css        ← All site styles
│   └── payload.config.ts      ← CMS configuration
├── .env                       ← Your secret keys (never share this)
├── next.config.mjs
└── package.json
```

---

## Troubleshooting

**"command not found: npm"** → Node.js is not installed. See Step 1.

**"Error: Cannot find module"** → Run `npm install` again from the `mynzo-nextjs` folder.

**Page shows blank / images missing** → Make sure your media files are in the `public/` folder.

**Admin panel not loading** → Make sure `npm run dev` is running and visit `http://localhost:3000/admin`.

**Need help?** Email: support@mynzocarbon.com


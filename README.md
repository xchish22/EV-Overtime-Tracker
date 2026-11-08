# Overtime Tracker (v2.18.2)

A phone app for tracking RCMP overtime, callbacks, court, OA on-call time, lieu time and meal & mileage claims, and confirming each entry against your pay stub.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The app itself |
| `manifest.webmanifest` | Lets Android install it as an app (name, icon, colours) |
| `sw.js` | Lets the app open without an internet connection |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | The home-screen icon |

## Important: where your data is saved

This copy saves your entries **on the phone, in Chrome**, not in your Claude account.

- Entries you made in the Claude version do **not** carry over. You'll start empty.
- Clearing Chrome's data for the site, or uninstalling the app, **erases your entries**.
- Entries don't sync between devices.

## Backing up to Google Drive

Tap **BACKUP** at the top of the app (next to the version number). It turns gold and shows a count, like **BACKUP • 3**, when you have changes that aren't backed up. Your phone's share menu opens: choose **Drive**, then **Save**. Do this every week or two (the app reminds you after 14 days).

To restore (new phone, reset, or moving entries from the Claude version): tap **Restore from a backup file** and pick the backup from Google Drive. Entries already in the app are kept, and only missing ones are added.

**Moving your entries from the Claude version:** open the app in Claude, tap **Back up to Google Drive** there, then in the phone app tap **Restore from a backup file** and pick that file.

## Part 1: Put it on GitHub (about 10 minutes, no coding)

1. Go to **github.com** and create a free account (or sign in).
2. Click **+** (top right) → **New repository**.
   - Name: `overtime-tracker`
   - Visibility: **Public** (free GitHub Pages needs a public repository; your *entries* stay on your phone, but the app code is visible to anyone)
   - Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Drag in **all the files from this folder** (`index.html`, `manifest.webmanifest`, `sw.js`, and the three `icon-…png` files). This README is optional.
5. Click **Commit changes**.
6. Go to **Settings** → **Pages** (left menu).
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)** → **Save**.
7. Wait 1–2 minutes, then refresh the Pages screen. It will show your link, like
   `https://YOUR-USERNAME.github.io/overtime-tracker/`

## Part 2: Install it on your Android phone

1. On your phone, open **Chrome** and go to your link from step 7.
2. Tap the **⋮** menu (top right) → **Install app** (on some phones: **Add to Home screen** → **Install**).
3. The clock icon appears on your home screen. It opens full screen, like a regular app, and works without signal.

## Updating the app later

When you get a new version (a new `index.html`):

1. In your GitHub repository, click **Add file** → **Upload files**, drag in the new `index.html` (and `sw.js` if it changed), and **Commit changes**.
2. Wait 1–2 minutes. Open the app on your phone with a connection. It picks up the new version (close and reopen it once if needed). Your entries stay.

## Optional: a real Play Store-style app file (APK)

If you want an installable Android app file instead of the Chrome install:

1. Go to **pwabuilder.com**, paste your GitHub Pages link, and click **Start**.
2. Choose **Android** → **Generate Package** and download it.
3. The download includes an `.apk` you can install on your phone (allow "install unknown apps" for your file manager when asked) and instructions for the Play Store if you ever want that.

For personal use, the Chrome **Install app** option in Part 2 is simpler and does the same thing.

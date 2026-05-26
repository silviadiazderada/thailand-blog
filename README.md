# 🌿 Hilltribe Organic Team — Thailand 2025 Blog

A blog website for the MBA field project with Hilltribe Organics, Northern Thailand.

---

## Quick start — open locally

Just double-click `index.html` in your file explorer. No server needed.

---

## How to update content

All content lives in **`js/data.js`**. Open it in any text editor (Notepad, VS Code, etc.).

### Add team photos

1. Export photos from the PDF (open the PDF, right-click each photo → Save as image)
2. Put them in `images/team/` — e.g. `images/team/silvia.jpg`
3. In `data.js`, update the `photo` field for each team member:
   ```js
   photo: "images/team/silvia.jpg"
   ```

### Add/edit daily blog entries

In `data.js`, find the `DAYS` array. Each day has a `content` field with HTML:
```js
content: `
  <p>Your entry here...</p>
  <h4>A subheading</h4>
  <p>More content...</p>
`
```
Replace the placeholder text with your real daily entries.

### Add photos to a day

In the same day object, add image paths to the `photos` array:
```js
photos: [
  "images/day3/photo1.jpg",
  "images/day3/photo2.jpg"
]
```
Create an `images/day3/` folder (or any structure you prefer) and put photos there.

---

## Deploy to GitHub Pages (free hosting)

1. Create a free account at [github.com](https://github.com) if you don't have one
2. Create a new repository (e.g. `thailand-blog`)
3. Upload all files (drag and drop into the GitHub web interface, or use GitHub Desktop)
4. Go to **Settings → Pages → Source** and select `main` branch, root folder
5. Your site will be live at `https://yourusername.github.io/thailand-blog/` in ~2 minutes

---

## File structure

```
ThailandBlog/
├── index.html          ← Landing page (hero, team, client)
├── blog.html           ← Blog with interactive map
├── css/
│   └── style.css       ← All styles (colors, layout, typography)
├── js/
│   ├── data.js         ← ✏️  EDIT THIS — team info, blog entries, photos
│   ├── map.js          ← Leaflet map + travel animation logic
│   └── main.js         ← Rendering logic (don't need to edit)
├── images/
│   ├── team/           ← Put team photos here
│   └── day1/ day2/...  ← Put daily photos here
└── .nojekyll           ← Tells GitHub Pages not to use Jekyll
```

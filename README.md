# Portfolio

A personal portfolio website for Jason Dahan, built as a lightweight static site.

## Features

- Responsive landing page with About, Projects, Skills, and Contact sections
- LinkedIn and GitHub calls to action
- Featured project cards for C, C++, Java, Python, and web work
- Friendly scroll-aware avatar that jokes about each project language
- No build step or framework dependency required

## Run locally

Open `index.html` directly in a browser, or serve the folder with a static server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Customize

- Update LinkedIn/GitHub links in `index.html`
- Replace project card titles, descriptions, and bullet points with your real projects
- Edit each card's `data-avatar-line` value to change the avatar jokes

# Portfolio

A personal portfolio website for Jason Dahan, built as a lightweight static site.

## Features

- Responsive landing page with About, Education, Courses, Experience, Projects, Skills, and Contact sections
- LinkedIn and GitHub calls to action
- Featured project cards for C compiler, C assembler, C++, Java, and Python work
- Reusable placeholders for Udemy and Coursera courses, plus Cisco Networking Academy's Networking Basics course
- Cute robot avatar with an idle hiring pitch and project-specific hover jokes
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
- Replace the course placeholder cards with completed certificates and course links
- Edit each card's `data-hover-line` value to change the robot's hover jokes

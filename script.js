const progressBar = document.querySelector(".scroll-progress");
const avatarLine = document.querySelector("#avatar-line");
const projectCards = Array.from(document.querySelectorAll(".project-card"));

const defaultLine = "Welcome! Scroll through Jason's projects and I will provide highly professional jokes.";

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

function setActiveCard(card) {
  projectCards.forEach((projectCard) => {
    projectCard.classList.toggle("is-active", projectCard === card);
  });

  avatarLine.textContent = card?.dataset.avatarLine || defaultLine;
}

const projectObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visibleEntries.length > 0) {
      setActiveCard(visibleEntries[0].target);
    }
  },
  {
    rootMargin: "-20% 0px -35% 0px",
    threshold: [0.25, 0.5, 0.75],
  },
);

projectCards.forEach((card) => projectObserver.observe(card));
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

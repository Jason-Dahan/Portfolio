const progressBar = document.querySelector(".scroll-progress");
const avatarLine = document.querySelector("#avatar-line");
const avatarCompanion = document.querySelector(".avatar-companion");
const projectCards = Array.from(document.querySelectorAll(".project-card"));

const idleLine =
  "My creator told me to be on my best behavior so you'd hire them. Am I doing a good job?";
let activeCard = null;
let hoveredCard = null;
let talkTimeout;

function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
}

function setActiveCard(card) {
  activeCard = card;

  if (hoveredCard) {
    return;
  }

  projectCards.forEach((projectCard) => {
    projectCard.classList.toggle("is-active", projectCard === card);
  });
}

function updateAvatarLine(line) {
  avatarLine.textContent = line;
  avatarCompanion.classList.add("is-talking");

  window.clearTimeout(talkTimeout);
  talkTimeout = window.setTimeout(() => {
    avatarCompanion.classList.remove("is-talking");
  }, 650);
}

function setHoveredCard(card) {
  hoveredCard = card;

  projectCards.forEach((projectCard) => {
    const isCurrentCard = projectCard === card;
    projectCard.classList.toggle("is-active", isCurrentCard);
    projectCard.classList.toggle("is-hovered", isCurrentCard);
  });

  updateAvatarLine(card.dataset.hoverLine || card.dataset.avatarLine || idleLine);
}

function clearHoveredCard(card) {
  if (hoveredCard !== card) {
    return;
  }

  hoveredCard = null;

  projectCards.forEach((projectCard) => {
    projectCard.classList.remove("is-hovered");
    projectCard.classList.toggle("is-active", projectCard === activeCard);
  });

  updateAvatarLine(idleLine);
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

projectCards.forEach((card) => {
  projectObserver.observe(card);
  card.addEventListener("mouseenter", () => setHoveredCard(card));
  card.addEventListener("focus", () => setHoveredCard(card));
  card.addEventListener("mouseleave", () => clearHoveredCard(card));
  card.addEventListener("blur", () => clearHoveredCard(card));
});
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

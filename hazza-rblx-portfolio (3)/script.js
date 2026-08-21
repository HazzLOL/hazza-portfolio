const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

document.querySelectorAll(".project").forEach((project) => {
  const video = project.querySelector("video");
  const frame = project.querySelector(".project-video");
  const button = project.querySelector(".video-button");
  video.addEventListener("loadeddata", () => frame.classList.add("has-video"));
  video.addEventListener("error", () => frame.classList.remove("has-video"));
  button.addEventListener("click", async () => {
    if (video.paused) {
      document.querySelectorAll("video").forEach((other) => { if (other !== video) other.pause(); });
      await video.play();
      button.textContent = "PAUSE";
    } else {
      video.pause();
    }
  });
  video.addEventListener("pause", () => { button.textContent = "PLAY"; });
});
document.querySelector("#year").textContent = new Date().getFullYear();

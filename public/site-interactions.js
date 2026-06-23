(() => {
  const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cursor = document.querySelector(".cursor");
  if (!cursor || coarse) return;
  const media = cursor.querySelector(".cursor-media");
  // prvky, nad kterými kurzor reaguje (klikatelné + ty s vlastním kurzor-obsahem)
  const HOVER_SEL = "a, button, [data-cursor-label], [data-cursor-image]";

  let frame = 0;
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  const paint = () => {
    cursor.style.transform = "translate3d(" + currentX + "px," + currentY + "px,0) translate(-50%,-50%)";
  };

  const render = () => {
    if (document.hidden) {
      frame = 0;
      return;
    }

    currentX += (targetX - currentX) * 0.32;
    currentY += (targetY - currentY) * 0.32;
    paint();

    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      frame = window.requestAnimationFrame(render);
      return;
    }

    frame = 0;
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (reducedMotion) {
        currentX = targetX;
        currentY = targetY;
        paint();
        return;
      }
      schedule();
    },
    { passive: true }
  );

  document.addEventListener("pointerover", (event) => {
    const target = event.target && event.target.closest ? event.target.closest(HOVER_SEL) : null;
    if (!target) return;
    cursor.classList.add("is-active");
    // kontextový obsah: prvek může nést vlastní obrázek (brand logo) přes data-cursor-image
    const img = target.getAttribute("data-cursor-image");
    if (img && media) {
      if (media.getAttribute("src") !== img) media.setAttribute("src", img);
      cursor.classList.add("has-media");
    } else {
      cursor.classList.remove("has-media");
    }
  }, { passive: true });

  document.addEventListener("pointerout", (event) => {
    const target = event.target && event.target.closest ? event.target.closest(HOVER_SEL) : null;
    const next = event.relatedTarget;
    if (target && next && next.closest && next.closest(HOVER_SEL) === target) return;
    cursor.classList.remove("is-active");
    cursor.classList.remove("has-media");
  }, { passive: true });

  // stisk myši → z kurzoru se stane barevná koule (uvolnění/odchod ji vrátí)
  window.addEventListener("pointerdown", () => cursor.classList.add("is-ball"), { passive: true });
  const dropBall = () => cursor.classList.remove("is-ball");
  window.addEventListener("pointerup", dropBall, { passive: true });
  window.addEventListener("pointercancel", dropBall, { passive: true });
  window.addEventListener("blur", dropBall);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector(".project-overlay:target")) {
      window.location.hash = "projekty";
    }
  });
})();

(() => {
  document.addEventListener("click", (event) => {
    const button = event.target && event.target.closest ? event.target.closest("[data-ill-scroll]") : null;
    if (!button) return;

    const carousel = button.closest(".illustrations-section");
    const track = carousel && carousel.querySelector(".ill-track");
    if (!track) return;

    event.preventDefault();
    const direction = Number(button.getAttribute("data-ill-scroll")) || 1;
    const amount = Math.max(260, track.clientWidth * 0.72);
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  });
})();

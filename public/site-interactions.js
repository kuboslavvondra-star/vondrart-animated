(() => {
  const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const cursor = document.querySelector(".cursor");
  if (!cursor || coarse) return;

  let frame = 0;
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  const render = () => {
    currentX += (targetX - currentX) * 0.32;
    currentY += (targetY - currentY) * 0.32;
    cursor.style.transform = "translate3d(" + currentX + "px," + currentY + "px,0) translate(-50%,-50%)";

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
      schedule();
    },
    { passive: true }
  );

  document.addEventListener("pointerover", (event) => {
    if (event.target && event.target.closest && event.target.closest("a, button, [data-cursor-label]")) {
      cursor.classList.add("is-active");
    }
  });

  document.addEventListener("pointerout", (event) => {
    const target = event.target && event.target.closest ? event.target.closest("a, button, [data-cursor-label]") : null;
    const next = event.relatedTarget;
    if (target && next && next.closest && next.closest("a, button, [data-cursor-label]") === target) return;
    cursor.classList.remove("is-active");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector(".project-overlay:target")) {
      window.location.hash = "projekty";
    }
  });
})();

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * ScrollFX — pohybová vrstva (progressive enhancement).
 *
 *  • Lenis smooth scroll + plynulé skoky na sekční kotvy
 *  • scroll reveal sekcí, nadpisů a staggered karet (IntersectionObserver)
 *  • clip-path wipe + Ken Burns scale u obrázků
 *  • scroll-velocity marquee (rychlost + jemný skew dle scrollu)
 *  • magnetická tlačítka/odkazy a 3D tilt karet (kurzor)
 *  • silnější parallax hero / dekorací
 *  • úvodní „opona" při prvním načtení
 *
 * Vše guardované přes prefers-reduced-motion a (pointer: coarse).
 * Bez JS zůstává web plně viditelný — skrytý stav platí jen pod html.scroll-fx-ready.
 */
export function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const enableMotion = !reduceMotion && !coarse;

    root.classList.add("scroll-fx-ready");
    const cleanups: Array<() => void> = [];

    /* ----------------------------- INTRO OPONA ----------------------------- */
    const curtain = document.querySelector(".intro-curtain");
    if (curtain) {
      if (reduceMotion) {
        curtain.remove();
      } else {
        const remove = () => curtain.remove();
        curtain.addEventListener("animationend", (e) => {
          if ((e as AnimationEvent).animationName.toLowerCase().includes("curtainup")) remove();
        });
        const safety = window.setTimeout(remove, 2800); // pojistka, kdyby animationend nepřišel
        cleanups.push(() => window.clearTimeout(safety));
      }
    }

    /* ------------------------------- REVEAL -------------------------------- */
    const singles: Array<[string, string]> = [
      [".hero-label", "fade"],
      [".hero-title .title-line", "up"],
      [".hero-desc", "fade"],
      [".hero-scroll", "fade"],
      [".section-head", "up"],
      [".about-section > *", "up"],
      [".contact-section > *", "up"],
      [".ill-top", "up"],
      [".ill-title-row", "up"]
    ];
    const groups: Array<[string, string]> = [
      [".project-grid", ":scope > *"],
      [".services-grid", ".service-item"],
      [".collabs-grid", ".collab-item"],
      [".ill-track", ".ill-card"]
    ];
    // Obrázky s clip-path wipe (scale jen tam, kde transform není zamčený !important).
    const imageReveals: Array<[string, string]> = [
      [".project-card-image", "clip"],
      [".ill-card img", "clip-scale"]
    ];

    const revealEls: Element[] = [];
    const tag = (el: Element, variant: string, index = 0) => {
      if (el.hasAttribute("data-reveal")) return;
      el.setAttribute("data-reveal", variant);
      if (index) (el as HTMLElement).style.setProperty("--rv-i", String(index));
      revealEls.push(el);
    };

    singles.forEach(([selector, variant]) => {
      document.querySelectorAll(selector).forEach((el) => tag(el, variant));
    });
    groups.forEach(([containerSel, childSel]) => {
      document.querySelectorAll(containerSel).forEach((container) => {
        container.querySelectorAll(childSel).forEach((child, i) => tag(child, "up", i % 8));
      });
    });
    imageReveals.forEach(([selector, variant]) => {
      document.querySelectorAll(selector).forEach((el) => tag(el, variant, 1));
    });

    const reveal = (el: Element) => el.classList.add("is-revealed");
    const inViewport = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(reveal);
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      // Prvky už ve viewportu odhalíme okamžitě (bez bliknutí); ostatní se animují při scrollu.
      revealEls.forEach((el) => (inViewport(el) ? reveal(el) : io.observe(el)));
      cleanups.push(() => io.disconnect());
    }

    if (!enableMotion) {
      return () => {
        cleanups.forEach((fn) => fn());
        root.classList.remove("scroll-fx-ready");
      };
    }

    /* --------------------------- SMOOTH SCROLL ----------------------------- */
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5
    });

    // Projektové :target overlaye mají vlastní vnitřní scroll — data-lenis-prevent
    // zajistí nativní scroll uvnitř (jinak by Lenis ukradl kolečko).
    document.querySelectorAll(".project-overlay").forEach((el) => el.setAttribute("data-lenis-prevent", ""));

    // Plynulé skoky na sekční kotvy; odkazy overlayů nehijackujeme (:target).
    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      if (target.closest(".project-overlay") || link.closest(".project-overlay")) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -8 });
      if (history.replaceState) history.replaceState(null, "", href);
    };
    document.addEventListener("click", onAnchorClick);

    /* ----------------- SCROLL-VELOCITY MARQUEE + PARALLAX ------------------ */
    const track = document.querySelector<HTMLElement>(".marquee-track");
    let trackHalf = 0;
    let marqueeX = 0;
    let velocity = 0;
    const measure = () => {
      if (track) trackHalf = track.scrollWidth / 2;
    };
    if (track) track.classList.add("fx-marquee-js"); // přebírá řízení od CSS tickeru
    measure();
    window.addEventListener("resize", measure, { passive: true });
    cleanups.push(() => window.removeEventListener("resize", measure));

    type PItem = { el: HTMLElement; speed: number };
    const parallaxItems: PItem[] = [];
    const collect = (selector: string, speed: number) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.style.willChange = "transform";
        parallaxItems.push({ el, speed });
      });
    };
    collect(".hero-mesh", 0.18);
    collect(".dot-grid", 0.08);
    collect(".hero-side-label", 0.12);
    // .ill-card img NEparalaxujeme — je to clip-scale reveal target (kolize transformu).

    const applyParallax = () => {
      const vh = window.innerHeight;
      for (const { el, speed } of parallaxItems) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -240 || rect.top > vh + 240) continue;
        const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
        el.style.transform = `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
      }
    };

    lenis.on("scroll", (e: { velocity: number }) => {
      velocity = e.velocity;
      applyParallax();
    });
    applyParallax();

    const BASE_MARQUEE = 0.55; // px/frame klidový pohyb
    let rafId = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      if (track && trackHalf > 0) {
        const dir = velocity >= 0 ? 1 : -1;
        marqueeX -= BASE_MARQUEE + Math.abs(velocity) * 0.6 * dir;
        if (marqueeX <= -trackHalf) marqueeX += trackHalf;
        if (marqueeX > 0) marqueeX -= trackHalf;
        const skew = Math.max(-5, Math.min(5, velocity * 0.35));
        track.style.transform = `translate3d(${marqueeX.toFixed(2)}px,0,0) skewX(${skew.toFixed(2)}deg)`;
      }
      velocity *= 0.9; // doznění skewu po zastavení scrollu
      rafId = window.requestAnimationFrame(loop);
    };
    rafId = window.requestAnimationFrame(loop);

    cleanups.push(() => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    });

    /* --------------------- KURZOR: MAGNET + 3D TILT ------------------------ */
    const magnetic = document.querySelectorAll<HTMLElement>(
      ".header-cta, .desktop-nav a, .brand-mark, .contact-actions a, .ill-arrow"
    );
    magnetic.forEach((el) => {
      el.classList.add("fx-magnetic");
      const strength = el.classList.contains("header-cta") ? 0.4 : 0.3;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${(mx * strength).toFixed(1)}px, ${(my * strength).toFixed(1)}px)`;
      };
      const onLeave = () => {
        el.style.transform = "";
      };
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    });

    const tiltCards = document.querySelectorAll<HTMLElement>(".project-card");
    tiltCards.forEach((card) => {
      card.classList.add("fx-tilt");
      const onMove = (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transition = "";
        card.style.transform = `perspective(900px) rotateY(${(px * 6).toFixed(2)}deg) rotateX(${(-py * 6).toFixed(2)}deg)`;
      };
      const onLeave = () => {
        card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
      };
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      root.classList.remove("scroll-fx-ready");
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * ScrollFX — additivní vrstva pohybu (progressive enhancement).
 *
 *  - Lenis smooth scroll (jen desktop / ne-reduced-motion)
 *  - plynulé skoky na kotvy (#nav)
 *  - scroll reveal sekcí, nadpisů a staggered karet (IntersectionObserver)
 *  - jemný parallax na hero a vybraných obrázcích
 *
 * Vše je guardované přes prefers-reduced-motion a (pointer: coarse).
 * Bez JS / bez podpory zůstává web plně viditelný a funkční — skrytý
 * výchozí stav reveal prvků platí jen pod `html.scroll-fx-ready`.
 */
export function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const enableMotion = !reduceMotion && !coarse;

    // Aktivuje skrytý výchozí stav reveal prvků (progressive enhancement).
    root.classList.add("scroll-fx-ready");

    const cleanups: Array<() => void> = [];

    /* ----------------------------- REVEAL ------------------------------ */
    // Jednotlivé prvky, které se odhalují samostatně.
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

    // Skupiny, jejichž děti se odhalují postupně (stagger).
    const groups: Array<[string, string]> = [
      [".project-grid", ":scope > *"],
      [".services-grid", ".service-item"],
      [".collabs-grid", ".collab-item"],
      [".ill-track", ".ill-card"]
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
        const children = container.querySelectorAll(childSel);
        children.forEach((child, i) => tag(child, "up", i % 8));
      });
    });

    const reveal = (el: Element) => el.classList.add("is-revealed");
    const inViewport = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      // Bez animací: rovnou vše odhalit.
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
      // Prvky už viditelné při načtení odhalíme okamžitě (bez animace i bez bliknutí);
      // ostatní se elegantně animují, jakmile přiscrollují do viewportu.
      revealEls.forEach((el) => (inViewport(el) ? reveal(el) : io.observe(el)));
      cleanups.push(() => io.disconnect());
    }

    /* --------------------------- SMOOTH SCROLL -------------------------- */
    let lenis: Lenis | null = null;

    if (enableMotion) {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5
      });

      let rafId = 0;
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };
      rafId = window.requestAnimationFrame(raf);

      // Projektové detaily jsou full-screen :target overlaye s vlastním vnitřním
      // scrollem (.xx-sheet { overflow:auto }). Lenis by jim jinak ukradl kolečko —
      // data-lenis-prevent zajistí nativní scroll uvnitř overlayů.
      document.querySelectorAll(".project-overlay").forEach((el) => {
        el.setAttribute("data-lenis-prevent", "");
      });

      // Plynulé skoky na sekční kotvy (#…). Záměrně NEhijackujeme odkazy, které
      // otevírají/zavírají projektové overlaye — ty spoléhají na nativní :target.
      const onAnchorClick = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
        const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
        if (!link) return;
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        // odkaz uvnitř overlaye nebo míří na overlay → nech nativní (:target)
        if (target.closest(".project-overlay") || link.closest(".project-overlay")) return;
        event.preventDefault();
        lenis?.scrollTo(target as HTMLElement, { offset: -8 });
        if (history.replaceState) history.replaceState(null, "", href);
      };
      document.addEventListener("click", onAnchorClick);

      cleanups.push(() => {
        window.cancelAnimationFrame(rafId);
        document.removeEventListener("click", onAnchorClick);
        lenis?.destroy();
      });
    }

    /* ----------------------------- PARALLAX ----------------------------- */
    if (enableMotion) {
      type PItem = { el: HTMLElement; speed: number };
      const parallaxItems: PItem[] = [];
      const collect = (selector: string, speed: number) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          el.style.willChange = "transform";
          parallaxItems.push({ el, speed });
        });
      };
      collect(".hero-mesh", 0.12);
      collect(".project-media img", 0.06);
      collect(".ill-card img", 0.05);

      const applyParallax = () => {
        const vh = window.innerHeight;
        for (const { el, speed } of parallaxItems) {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < -200 || rect.top > vh + 200) continue;
          const center = rect.top + rect.height / 2;
          const offset = (center - vh / 2) * speed;
          el.style.transform = `translate3d(0, ${(-offset).toFixed(2)}px, 0)`;
        }
      };

      if (lenis) {
        lenis.on("scroll", applyParallax);
      } else {
        window.addEventListener("scroll", applyParallax, { passive: true });
        cleanups.push(() => window.removeEventListener("scroll", applyParallax));
      }
      applyParallax();
    }

    return () => {
      cleanups.forEach((fn) => fn());
      root.classList.remove("scroll-fx-ready");
    };
  }, []);

  return null;
}

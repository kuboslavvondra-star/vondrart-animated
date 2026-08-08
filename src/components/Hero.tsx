export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="dot-grid" aria-hidden="true" />
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-blob blob-a">
          <span className="blob-layer blob-pink" />
          <span className="blob-layer blob-blue" />
          <span className="blob-layer blob-peach" />
        </div>
        <div className="mesh-blob blob-c" />
      </div>
      <span className="hero-side-label" aria-hidden="true">
        Brand & Marketing Studio
      </span>

      <div className="hero-copy hero-content">
        <p className="hero-label">Brand & Marketing Studio — Brno</p>
        <h1 className="hero-title" aria-label="creative, smart">
          <span className="title-line">
            creative<span className="blink-comma">,</span>
          </span>
          <span className="title-line">
            <em>
              <span className="blink-sm">sm</span>art
            </em>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Pracujeme na brandech, které mají co říct. Od brand strategie po každý detail vizuální identity.
          </p>
        </div>
      </div>

      <div className="scroll-cue hero-scroll" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  );
}

const illustrations = [
  {
    caption: "Punkt — omalovánka",
    image: "/images/illustration-punkt.webp",
    width: 1423,
    height: 2048
  },
  {
    caption: "Bonghemia — ilustrace",
    image: "/images/illustration-bonghemia.webp",
    width: 1423,
    height: 2048
  },
  {
    caption: "Vltavská",
    image: "/images/illustration-vltavska.webp",
    width: 2048,
    height: 1423
  },
  {
    caption: "Swap & Sip",
    image: "/images/illustration-swap-sip.webp",
    width: 1414,
    height: 2000
  },
  {
    caption: "Swap & Sip — Espresso.bar",
    image: "/images/illustration-swap-sip-espresso.webp",
    width: 1080,
    height: 1350
  },
  {
    caption: "Barvy & Beaty",
    image: "/images/illustration-barvy-beaty.webp",
    width: 1414,
    height: 2000
  },
  {
    caption: "Five Elephant Takeover",
    image: "/images/illustration-five-elephant.webp",
    width: 1080,
    height: 1440
  }
];

export function Illustrations() {
  return (
    <section className="section illustrations-section" id="ilustrace">
      <div className="ill-top">
        <span className="ill-kicker">Vybrané ilustrace</span>
        <p>
          Výběr ilustrací napříč projekty — brandové motivy, vizuální prvky pro sociální sítě, merch a tiskové
          výstupy.
        </p>
      </div>

      <div className="ill-title-row">
        <h2 className="ill-title">Ilustrace</h2>
        <div className="ill-controls" aria-label="Ovládání carouselu ilustrací">
          <button className="ill-arrow" type="button" data-ill-scroll="-1" aria-label="Předchozí ilustrace">
            ←
          </button>
          <button className="ill-arrow" type="button" data-ill-scroll="1" aria-label="Další ilustrace">
            →
          </button>
        </div>
      </div>

      <div className="ill-carousel">
        <div className="ill-track">
          {illustrations.map((item) => (
            <figure className="ill-card" key={item.caption} data-cursor-label={item.caption}>
              <img
                src={item.image}
                alt={item.caption}
                width={item.width}
                height={item.height}
                decoding="async"
                loading="lazy"
              />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const collaborations = [
  { name: "TEDx Brno", scope: "Marketing · Event", variant: "tedx", logo: "/images/collab-tedx.svg" },
  { name: "Festival Tlak", scope: "Social Media", variant: "tlak", logo: "/images/collab-tlak.svg" },
  { name: "Crosskeys Towing", scope: "Redesign loga · USA", variant: "crosskeys", logo: "/images/collab-crosskeys.png" },
  { name: "Kavárna Spolek", scope: "Socials · Grafika", variant: "spolek", logo: "/images/collab-spolek.svg" },
  { name: "Mascotte", scope: "Foto služby", variant: "mascotte", logo: "/images/collab-mascotte.svg" }
];

export function Collaborations() {
  return (
    <section className="section collabs-section" id="collabs">
      <div className="section-head section-head-stacked">
        <h2>
          Další
          <span>spolupráce</span>
        </h2>
      </div>
      <div className="collabs-grid">
        {collaborations.map((collaboration) => (
          <article className={`collab-item collab-${collaboration.variant}`} key={collaboration.name}>
            <div className="collab-logo has-logo" aria-label={collaboration.name}>
              <img
                className="collab-logo-img"
                src={collaboration.logo}
                alt={`${collaboration.name} logo`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h3>{collaboration.name}</h3>
              <span>{collaboration.scope}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

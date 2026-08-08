const serviceGroups = [
  {
    title: "Brand Identity",
    lead: "Tvorba vizuální identity a loga pro firmu",
    items: ["Logo & visual system", "Typography & color", "Illustration", "Packaging", "Brand guidelines"]
  },
  {
    title: "Brand Strategy",
    lead: "Brand strategie a positioning značky",
    items: ["Positioning", "Naming", "Tone of voice", "Storytelling", "Creative direction"]
  },
  {
    title: "Creative Production",
    lead: "Copywriting, tone of voice a obsah",
    items: ["Social media", "Campaigns", "Photography", "Content creation", "Copywriting"]
  }
];

export function Services() {
  return (
    <section className="section services-section" id="sluzby">
      <div className="section-head section-head-simple">
        <h2>Služby</h2>
      </div>

      <div className="services-grid">
        {serviceGroups.map((service, index) => (
          <article key={service.title} className="service-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p className="service-lead">{service.lead}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

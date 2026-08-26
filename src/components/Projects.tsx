import type { CSSProperties } from "react";
import { projects, type Project } from "@/data/projects";

const deferredImageProps = {
  decoding: "async",
  loading: "lazy"
} as const;

type Theme = {
  bg: string;
  fg: string;
  muted: string;
  accent: string;
  panel: string;
  tileBg: string;
  tileFg: string;
};

const projectThemes: Record<string, Theme> = {
  "dopamine-tour": {
    bg: "#07102a",
    fg: "#fefaeb",
    muted: "rgba(254, 250, 235, 0.7)",
    accent: "#73c9e6",
    panel: "rgba(255, 255, 255, 0.08)",
    tileBg: "#73c9e6",
    tileFg: "#10111d"
  },
  "syndikat-legal": {
    bg: "#062924",
    fg: "#eef5f1",
    muted: "rgba(238, 245, 241, 0.68)",
    accent: "#b9dcc6",
    panel: "rgba(185, 220, 198, 0.1)",
    tileBg: "#072924",
    tileFg: "#b9dcc6"
  },
  dvorek: {
    bg: "#d2360f",
    fg: "#fff4df",
    muted: "rgba(255, 244, 223, 0.78)",
    accent: "#1d1d1b",
    panel: "rgba(255, 244, 223, 0.12)",
    tileBg: "#d2360f",
    tileFg: "#fff4df"
  },
  "cafe-olbracht": {
    bg: "#fdf1d3",
    fg: "#181818",
    muted: "rgba(24, 24, 24, 0.66)",
    accent: "#6a5652",
    panel: "rgba(24, 24, 24, 0.07)",
    tileBg: "#fdf1d3",
    tileFg: "#181818"
  },
  cotyploty: {
    bg: "#004643",
    fg: "#f0ede4",
    muted: "rgba(240, 237, 228, 0.72)",
    accent: "#f0ede4",
    panel: "rgba(255, 255, 255, 0.08)",
    tileBg: "#004643",
    tileFg: "#f0ede4"
  }
};

function getTheme(project: Project) {
  return projectThemes[project.id] ?? {
    bg: project.palette[0],
    fg: "#f4f1eb",
    muted: "rgba(244, 241, 235, 0.7)",
    accent: project.palette[1] ?? "#f4f1eb",
    panel: "rgba(255,255,255,0.08)",
    tileBg: project.palette[0],
    tileFg: "#f4f1eb"
  };
}

function cssVars(project: Project) {
  const theme = getTheme(project);
  return {
    "--case-bg": theme.bg,
    "--case-fg": theme.fg,
    "--case-muted": theme.muted,
    "--case-accent": theme.accent,
    "--case-panel": theme.panel,
    "--tile-bg": theme.tileBg,
    "--tile-fg": theme.tileFg
  } as CSSProperties;
}

function CloseLink({ className, label = "Zavřít projekt" }: { className: string; label?: string }) {
  return (
    <a className={className} data-project-close="" href="#projekty" aria-label={label}>
      ×
    </a>
  );
}

export function Projects() {
  return (
    <section className="section projects-section" id="projekty">
      <div className="section-head projects-head">
        <h2>Vybrané projekty</h2>
        <a href="#collabs">Spolupráce →</a>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const isFirstRow = index < 3;
          const isLogoOnlyTile = project.id === "cotyploty";

          return (
            <a
              key={project.id}
              className={`project-card project-${project.id}`}
              href={`#${project.id}`}
              style={cssVars(project)}
              data-cursor-blur=""
            >
              <figure className="project-media">
                {!isLogoOnlyTile ? (
                  <img
                    className="project-card-image"
                    src={project.cardImage}
                    width={project.cardImageWidth}
                    height={project.cardImageHeight}
                    alt=""
                    decoding="async"
                    loading={isFirstRow ? "eager" : "lazy"}
                    fetchPriority={isFirstRow ? "high" : "auto"}
                  />
                ) : null}
                <img
                  className="project-logo"
                  src={project.logo}
                  width={project.logoWidth}
                  height={project.logoHeight}
                  alt={`${project.name} logo`}
                  decoding="async"
                  loading={isFirstRow ? "eager" : "lazy"}
                  fetchPriority={isFirstRow && isLogoOnlyTile ? "high" : "low"}
                />
              </figure>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.displayName}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </a>
          );
        })}
      </div>

      {projects.map((project) => (
        <ProjectOverlay key={project.id} project={project} />
      ))}
    </section>
  );
}

function ProjectOverlay({ project }: { project: Project }) {
  return (
    <div className="project-overlay project-overlay-original" id={project.id} data-overlay-id={project.overlayId}>
      {project.id === "dopamine-tour" ? <DopamineDetail /> : null}
      {project.id === "syndikat-legal" ? <SyndikatDetail /> : null}
      {project.id === "dvorek" ? <DvorekDetail /> : null}
      {project.id === "cafe-olbracht" ? <OlbrachtDetail /> : null}
      {project.id === "cotyploty" ? <CotyplotyDetail /> : null}
    </div>
  );
}

function DopamineDetail() {
  return (
    <div id="dopamine-vondrart-overlay" className="is-open">
      <CloseLink className="dt-close" />
      <div aria-label="Dopamine Tour projekt" aria-modal="true" className="dt-sheet" role="dialog">
        <section className="dt-hero">
          <div>
            <div className="dt-kicker">01 — City Experience</div>
            <h2 className="dt-title">
              Dopamine
              <br />
              Tour
            </h2>
            <p className="dt-claim">
              Tours designed for fast minds.
              <br />
              The walking tour for people who usually hate walking tours.
            </p>
            <div className="dt-tags">
              <span className="dt-tag">Brand Identity</span>
              <span className="dt-tag">Logo System</span>
              <span className="dt-tag">Visual System</span>
              <span className="dt-tag">Social Media</span>
            </div>
          </div>
          <div>
            <img width={1100} height={577}
              alt="Radnice a pražská architektura pro Dopamine Tour"
              className="dt-hero-photo"
              src="/images/dopamine-radnice.webp"
              {...deferredImageProps}
            />
            <div className="dt-meta">
              <div>
                <span>Studio</span>
                <strong>vondrart</strong>
              </div>
              <div>
                <span>Rok</span>
                <strong>2026</strong>
              </div>
              <div>
                <span>Kategorie</span>
                <strong>Turistická tour</strong>
              </div>
            </div>
          </div>
        </section>
        <hr className="dt-rule" />
        <section>
          <div className="dt-num">02</div>
          <h3 className="dt-heading">Logo &amp; barevný systém</h3>
          <div className="dt-logo-gradient">
            <img width={817} height={817} alt="Dopamine Tour logo" src="/images/dopamine-tour-logo.png" {...deferredImageProps} />
          </div>
          <div className="dt-palette">
            <div className="dt-swatch" style={{ background: "#FEFAEB", color: "#0E101F", border: "1px solid rgba(8,10,24,.10)" }}>
              <small>background</small>
              <b>#FEFAEB</b>
              <span>Cream</span>
            </div>
            <div className="dt-swatch" style={{ background: "#73C9E6", color: "#0E101F" }}>
              <small>primary</small>
              <b>#73C9E6</b>
              <span>Sky Blue</span>
            </div>
            <div className="dt-swatch" style={{ background: "#0E101F", color: "#FEFAEB" }}>
              <small>dark</small>
              <b>#0E101F</b>
              <span>Deep Navy</span>
            </div>
            <div className="dt-swatch" style={{ background: "#5C5AA4", color: "#FEFAEB" }}>
              <small>accent</small>
              <b>#5C5AA4</b>
              <span>Violet</span>
            </div>
            <div className="dt-swatch" style={{ background: "#B8A5D0", color: "#0E101F" }}>
              <small>soft</small>
              <b>#B8A5D0</b>
              <span>Lavender</span>
            </div>
            <div className="dt-swatch" style={{ background: "#E84A94", color: "#FEFAEB" }}>
              <small>energy</small>
              <b>#E84A94</b>
              <span>Pink</span>
            </div>
          </div>
          <div className="dt-gradient-strip" />
        </section>
        <hr className="dt-rule" />
        <section className="dt-grid">
          <div>
            <div className="dt-num">03</div>
            <h3 className="dt-heading">Logo jako dopaminová molekula</h3>
          </div>
          <div className="dt-copy">
            <p>Značka pracuje s motivem dopaminové molekuly jako vizuální metaforou pro zvědavost, očekávání a malé momenty odměny během procházky městem.</p>
            <p>Logo není dekorace navíc. Je to jednoduchý symbol toho, na čem Dopamine Tour stojí: objevování, překvapení a pocit, že chceš jít dál, protože za dalším rohem může čekat další zajímavost.</p>
          </div>
        </section>
        <hr className="dt-rule" />
        <section className="dt-grid">
          <div>
            <div className="dt-num">04</div>
            <h3 className="dt-heading">O projektu</h3>
          </div>
          <div className="dt-copy">
            <p>Dopamine Tour je městský zážitek pro zvídavé cestovatele, kteří chtějí poznat Prahu jinak než skrze klasickou turistickou prohlídku.</p>
            <p>Koncept tour už existoval. Naší rolí bylo dát mu vizuální tvář — vytvořit identitu, která převede energii, zvědavost a hravost celého zážitku do jednotného brand systému.</p>
            <p>Od loga přes ilustrace až po sociální výstupy a webový styl vznikl systém, který pomáhá značce působit výrazně, zapamatovatelně a současně.</p>
            <div className="dt-role-list">
              <span>vizuální identita</span>
              <span>logo design</span>
              <span>art direction</span>
              <span>ilustrační systém</span>
              <span>brand guidelines</span>
              <span>social media design</span>
              <span>web design</span>
            </div>
          </div>
        </section>
        <hr className="dt-rule" />
        <section>
          <div className="dt-num">05</div>
          <h3 className="dt-heading">Vizuální svět značky</h3>
          <div className="dt-small-photos">
            <img width={900} height={1350} alt="Prague visual" src="/images/dopamine-prague.webp" {...deferredImageProps} />
            <img width={900} height={1130} alt="Žižkov Tower visual" src="/images/dopamine-tower.webp" {...deferredImageProps} />
            <img width={900} height={1349} alt="Dopamine Tour moment" src="/images/dopamine-tour-moment.webp" {...deferredImageProps} />
          </div>
        </section>
        <hr className="dt-rule" />
        <section className="dt-grid">
          <div>
            <div className="dt-num">06</div>
            <h3 className="dt-heading">Social media systém</h3>
          </div>
          <div className="dt-copy">
            <p>Sociální výstupy jsou postavené na jednoduché logice: místo prodeje běžné prohlídky města komunikují zvědavost, smysly a moment překvapení.</p>
            <p>Obsah ukazuje Prahu jako zážitek, ne jako seznam památek — přes zrak, zvuk, vůni, dotek a malé objevy během cesty.</p>
          </div>
        </section>
        <div className="dt-social-grid">
          <img width={760} height={950} alt="Five senses" src="/images/dopamine-five-senses.webp" {...deferredImageProps} />
          <img width={760} height={950} alt="Sight" src="/images/dopamine-sight.webp" {...deferredImageProps} />
          <img width={760} height={950} alt="Sound" src="/images/dopamine-sound.webp" {...deferredImageProps} />
          <img width={760} height={950} alt="Scent" src="/images/dopamine-scent.webp" {...deferredImageProps} />
          <img width={760} height={950} alt="Touch" src="/images/dopamine-touch.webp" {...deferredImageProps} />
          <img width={760} height={950} alt="Book your dopamine hit" src="/images/dopamine-book-your-hit.webp" {...deferredImageProps} />
        </div>
        <hr className="dt-rule" />
        <section className="dt-closing">
          <div>
            <h3>
              Stejné město.
              <br />
              Jiný <span>zážitek.</span>
            </h3>
            <p>Výsledkem je výrazná vizuální identita pro turistickou tour, která nepůsobí jako klasický sightseeing produkt, ale jako současná městská experience značka.</p>
          </div>
          <img width={817} height={817} alt="Dopamine Tour logo" src="/images/dopamine-tour-logo.png" {...deferredImageProps} />
        </section>
      </div>
    </div>
  );
}

function SyndikatDetail() {
  return (
    <div id="syndikat-vondrart-overlay" className="is-open">
      <CloseLink className="sl-close" />
      <div aria-label="syndikat.legal projekt" aria-modal="true" className="sl-sheet" role="dialog">
        <section className="sl-hero">
          <div>
            <div className="sl-kicker">01 — Brand Identity</div>
            <h2 className="sl-title">syndikat.legal</h2>
            <p className="sl-claim">Moderní právní firma propojující několik právníků s různou specializací do jedné výrazné a srozumitelné značky.</p>
            <div className="sl-tags">
              <span className="sl-tag">Brand Identity</span>
              <span className="sl-tag">Logo System</span>
              <span className="sl-tag">Visual System</span>
              <span className="sl-tag">Social Media</span>
            </div>
          </div>
          <div>
            <div className="sl-hero-card">
              <img width={1400} height={919} alt="syndikat.legal desky" src="/images/syndikat-legal-desky.webp" {...deferredImageProps} />
            </div>
            <div className="sl-meta">
              <div>
                <span>Studio</span>
                <strong>vondrart</strong>
              </div>
              <div>
                <span>Rok</span>
                <strong>2026</strong>
              </div>
              <div>
                <span>Kategorie</span>
                <strong>Právo / Legal</strong>
              </div>
            </div>
          </div>
        </section>
        <hr className="sl-rule" />
        <section>
          <div className="sl-num">02</div>
          <h3 className="sl-heading">Logo &amp; barevný systém</h3>
          <div className="sl-palette">
            <div className="sl-swatch" style={{ background: "#B9DCC6", color: "#072924" }}>
              <small>light green</small>
              <b>#B9DCC6</b>
              <span>Mint Green</span>
            </div>
            <div className="sl-swatch" style={{ background: "#EEF5F1", color: "#072924", border: "1px solid rgba(7,41,36,.12)" }}>
              <small>white</small>
              <b>#EEF5F1</b>
              <span>Soft Mint</span>
            </div>
            <div className="sl-swatch" style={{ background: "#072924", color: "#EEF5F1" }}>
              <small>dark</small>
              <b>#072924</b>
              <span>Deep Green</span>
            </div>
          </div>
          <div className="sl-logo-row sl-logo-row--brandboard">
            <img width={1034} height={341} alt="syndikat.legal logo na světle zeleném podkladu" src="/images/syndikat-legal-logo-light.webp" {...deferredImageProps} />
            <img width={1034} height={341} alt="syndikat.legal logo na tmavém podkladu" src="/images/syndikat-legal-logo-dark.webp" {...deferredImageProps} />
          </div>
        </section>
        <hr className="sl-rule" />
        <section className="sl-grid">
          <div>
            <div className="sl-num">03</div>
            <h3 className="sl-heading">O projektu</h3>
          </div>
          <div className="sl-copy">
            <p>syndikat.legal je moderní právní firma, která propojuje několik právníků s různou specializací. Díky tomu může klientům nabídnout širší a komplexnější služby postavené na kombinaci znalostí jednotlivých expertů.</p>
            <p>Značka se záměrně vymezuje vůči klasickému obrazu advokátní kanceláře s paragrafem v logu, tmavým mramorem a formálním odstupem. Cílem bylo vytvořit identitu pro firmu, která hledá moderní řešení a komunikuje současně, jasně a sebevědomě.</p>
            <div className="sl-role-list">
              <span>vizuální identita</span>
              <span>logo design</span>
              <span>barevný systém</span>
              <span>social media design</span>
              <span>brand aplikace</span>
            </div>
          </div>
        </section>
        <hr className="sl-rule" />
        <section>
          <div className="sl-num">04</div>
          <h3 className="sl-heading">Vizuální aplikace</h3>
          <div className="sl-visual-grid">
            <img width={1080} height={1350} alt="syndikat.legal vizuál právní jistota" src="/images/syndikat-legal-pravni-jistota.webp" {...deferredImageProps} />
            <img width={1080} height={1350} alt="syndikat.legal vizuál zablokovaný Instagram účet" src="/images/syndikat-legal-instagram.webp" {...deferredImageProps} />
            <img width={1080} height={1350} alt="syndikat.legal vizuál poradenství v regulovaných trzích" src="/images/syndikat-legal-poradenstvi.webp" {...deferredImageProps} />
          </div>
        </section>
        <hr className="sl-rule" />
        <section className="sl-grid">
          <div>
            <div className="sl-num">05</div>
            <h3 className="sl-heading">Směr značky</h3>
          </div>
          <div className="sl-copy">
            <p>Namísto obvyklé právní vizuality jsme zvolili výraznou barevnost a čistý typografický systém. Kombinace tmavé zelené a světlých mátových tónů vytváří identitu, která je seriózní, ale zároveň okamžitě rozpoznatelná.</p>
            <p>Barvy mají fungovat jako signál značky — aby bylo už z dálky jasné, že jde o syndikat.legal. Identita tak staví na důvěře, odbornosti a moderním přístupu bez zbytečné konzervativní teatrálnosti.</p>
          </div>
        </section>
        <hr className="sl-rule" />
        <section className="sl-closing">
          <div>
            <h3>Moderní právo bez starého divadla.</h3>
            <p>Vizuální identita pro právní firmu, která chce působit odborně, současně a jasně rozpoznatelně — bez klišé klasických advokátních kanceláří.</p>
          </div>
          <img width={437} height={143} alt="syndikat.legal logo" src="/images/syndikat-legal-logo.png" {...deferredImageProps} />
        </section>
      </div>
    </div>
  );
}

function DvorekDetail() {
  return (
    <div id="dvorek-vondrart-overlay" className="is-open">
      <CloseLink className="dv-close" />
      <div aria-label="Dvorek projekt" aria-modal="true" className="dv-sheet" role="dialog">
        <section className="dv-hero">
          <div>
            <div className="dv-kicker">01 — Brand Identity</div>
            <h2 className="dv-title">Dvorek</h2>
            <p className="dv-claim">Lokální espresso bar s hravou identitou, ručním charakterem a výraznou oranžovo-krémovou vizualitou.</p>
            <div className="dv-tags">
              <span className="dv-tag">Brand Identity</span>
              <span className="dv-tag">Illustration</span>
              <span className="dv-tag">Social Media</span>
            </div>
          </div>
          <div>
            <div className="dv-hero-card">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", alignItems: "end" }}>
                <div style={{ background: "#d2360f", borderRadius: "18px", padding: "16px" }}>
                  <img width={338} height={404} alt="" src="/images/dvorek-kettle.png" {...deferredImageProps} />
                </div>
                <div style={{ background: "#d2360f", borderRadius: "18px", padding: "16px" }}>
                  <img width={402} height={424} alt="" src="/images/dvorek-character.png" {...deferredImageProps} />
                </div>
                <div style={{ background: "#d2360f", borderRadius: "18px", padding: "16px" }}>
                  <img width={396} height={352} alt="" src="/images/dvorek-latte.png" {...deferredImageProps} />
                </div>
              </div>
            </div>
            <div className="dv-meta">
              <div>
                <span>Studio</span>
                <strong>vondrart</strong>
              </div>
              <div>
                <span>Rok</span>
                <strong>2026</strong>
              </div>
              <div>
                <span>Kategorie</span>
                <strong>Café / Bistro</strong>
              </div>
            </div>
          </div>
        </section>
        <hr className="dv-rule" />
        <section>
          <div className="dv-num">02</div>
          <h3 className="dv-heading">Logo &amp; barevný systém</h3>
          <div className="dv-logo-panel">
            <img width={1496} height={421} alt="Dvorek logo" className="dv-logo-fixed" src="/images/dvorek-logo.png" {...deferredImageProps} />
          </div>
          <div className="dv-palette">
            <div className="dv-swatch" style={{ background: "#d2360f", color: "#fff4df" }}>
              <small>primary</small>
              <b>#D2360F</b>
              <span>Dvorek Orange</span>
            </div>
            <div className="dv-swatch" style={{ background: "#fff4df", color: "#d2360f", border: "1px solid rgba(210,54,15,.16)" }}>
              <small>light</small>
              <b>#FFF4DF</b>
              <span>Cream</span>
            </div>
            <div className="dv-swatch" style={{ background: "#1D1D1B", color: "#fff4df" }}>
              <small>dark</small>
              <b>#1D1D1B</b>
              <span>Contrast</span>
            </div>
          </div>
        </section>
        <hr className="dv-rule" />
        <section className="dv-grid">
          <div>
            <div className="dv-num">03</div>
            <h3 className="dv-heading">O projektu</h3>
          </div>
          <div className="dv-copy">
            <p>Dvorek je lokální café &amp; bistro značka postavená na jednoduchosti, výrazné barvě a přátelském vizuálním jazyku. Identita nemá působit sterilně ani luxusně — její síla je v uvolněnosti a zapamatovatelnosti.</p>
            <p>Naší rolí bylo vytvořit vizuální systém, který funguje od loga přes menu až po drobné ilustrace a obalové materiály. Výsledkem je značka, která působí lidsky, hravě a rozpoznatelně už z dálky.</p>
            <div className="dv-role-list">
              <span>vizuální identita</span>
              <span>logo design</span>
              <span>ilustrační systém</span>
              <span>typografie</span>
              <span>menu</span>
              <span>brand aplikace</span>
            </div>
          </div>
        </section>
        <hr className="dv-rule" />
        <section className="dv-grid">
          <div>
            <div className="dv-num">04</div>
            <h3 className="dv-heading">Ilustrační systém</h3>
          </div>
          <div className="dv-copy">
            <p>Ručně kreslené ilustrace jsou jeden z hlavních prvků identity. Konvice, postava s hrnkem, cappuccino, hrnek i sandwich vytváří vlastní svět značky a dávají jí neformální, lehce retro charakter.</p>
          </div>
        </section>
        <div className="dv-icons">
          <div className="dv-icon-card">
            <img width={338} height={404} alt="Dvorek konvice" src="/images/dvorek-kettle.png" {...deferredImageProps} />
          </div>
          <div className="dv-icon-card">
            <img width={402} height={424} alt="Dvorek postava s hrnkem" src="/images/dvorek-character.png" {...deferredImageProps} />
          </div>
          <div className="dv-icon-card">
            <img width={396} height={352} alt="Dvorek latte" src="/images/dvorek-latte.png" {...deferredImageProps} />
          </div>
          <div className="dv-icon-card">
            <img width={440} height={368} alt="Dvorek hrnek" src="/images/dvorek-mug.png" {...deferredImageProps} />
          </div>
          <div className="dv-icon-card">
            <img width={422} height={336} alt="Dvorek sandwich" src="/images/dvorek-sandwich.png" {...deferredImageProps} />
          </div>
        </div>
        <hr className="dv-rule" />
        <section>
          <div className="dv-num">05</div>
          <h3 className="dv-heading">Vizuální aplikace</h3>
          <div className="dv-visual-grid">
            <img width={1085} height={1046} alt="Dvorek menu" src="/images/dvorek-menu.webp" {...deferredImageProps} />
            <img width={1010} height={665} alt="Dvorek věrnostní kartička" src="/images/dvorek-loyalty-card.webp" {...deferredImageProps} />
            <img width={980} height={646} alt="Dvorek vzor s kelímkem" src="/images/dvorek-cup-pattern.png" {...deferredImageProps} />
          </div>
        </section>
        <hr className="dv-rule" />
        <section className="dv-grid">
          <div>
            <div className="dv-num">06</div>
            <h3 className="dv-heading">Směr značky</h3>
          </div>
          <div className="dv-copy">
            <p>Identita stojí na kontrastu jednoduché oranžovo-krémové palety a výrazného ručního výrazu. Díky tomu působí přístupně, živě a snadno rozpoznatelně v reálném provozu i na sociálních sítích.</p>
          </div>
        </section>
        <hr className="dv-rule" />
        <section className="dv-closing">
          <div>
            <h3>Espresso bar, který si zapamatuješ.</h3>
            <p>Výsledkem je hravá a výrazná identita pro lokální café &amp; bistro značku — bez sterilního minimalismu, s vlastním rukopisem a silnou vizuální energií.</p>
          </div>
          <img width={440} height={368} alt="Dvorek ilustrace" src="/images/dvorek-illustration.png" {...deferredImageProps} />
        </section>
      </div>
    </div>
  );
}
function OlbrachtDetail() {
  return (
    <div id="olbracht-vondrart-overlay" className="is-open">
      <CloseLink className="ob-close" />
      <div aria-label="Café Olbracht projekt" aria-modal="true" className="ob-sheet" role="dialog">
        <div className="ob-topline">
          <div className="ob-brand-mini">Café Olbracht / brand identity</div>
        </div>
        <section className="ob-hero">
          <div>
            <div className="ob-kicker">01 — Brand Identity</div>
            <h2 className="ob-title">
              Café
              <br />
              Olbracht
            </h2>
            <p className="ob-claim">Lokální kavárna na Olbrachtově náměstí v brněnském Komíně. Identitu jsme postavili na jednoduchosti, poctivosti a každodenním rytmu místa.</p>
            <div className="ob-tags">
              <span className="ob-tag">Brand Identity</span>
              <span className="ob-tag">Illustration</span>
              <span className="ob-tag">Social Media</span>
              <span className="ob-tag">Brand Applications</span>
            </div>
          </div>
          <div>
            <div className="ob-hero-image">
              <img width={897} height={1196} alt="Café Olbracht" src="/images/cafe-olbracht-main.webp" {...deferredImageProps} />
            </div>
            <div className="ob-meta">
              <div>
                <span>Studio</span>
                <strong>vondrart</strong>
              </div>
              <div>
                <span>Rok</span>
                <strong>2024</strong>
              </div>
              <div>
                <span>Kategorie</span>
                <strong>Kavárna</strong>
              </div>
              <div>
                <span>Výstup</span>
                <strong>Logo &amp; identita</strong>
              </div>
            </div>
          </div>
        </section>
        <hr className="ob-rule" />
        <section className="ob-grid">
          <div>
            <div className="ob-num">02</div>
            <h3 className="ob-heading">O projektu</h3>
          </div>
          <div className="ob-copy">
            <p>Pro Café Olbracht jsme navrhli vizuální identitu, která drží civilní charakter lokální kavárny a zároveň působí dost výrazně pro každodenní použití v provozu.</p>
            <p>Systém stojí na kontrastu jemných barev, výrazného loga a typografie, která nepůsobí sterilně, ale pořád zůstává čistá a praktická.</p>
          </div>
        </section>
        <hr className="ob-rule" />
        <section>
          <div className="ob-num">03</div>
          <h3 className="ob-heading">Barevná paleta</h3>
          <div className="ob-palette">
            <div className="ob-swatch" style={{ background: "#FDF1D3", color: "#181818" }}>
              <small>Papaya Whip</small>
              <b>Cream</b>
              <span>#FDF1D3</span>
            </div>
            <div className="ob-swatch" style={{ background: "#6A5652", color: "#FDF1D3" }}>
              <small>Dim Gray</small>
              <b>Brown</b>
              <span>#6A5652</span>
            </div>
            <div className="ob-swatch" style={{ background: "#CFDFBC", color: "#181818" }}>
              <small>Green Parlor</small>
              <b>Green</b>
              <span>#CFDFBC</span>
            </div>
            <div className="ob-swatch" style={{ background: "#181818", color: "#FDF1D3" }}>
              <small>Thamar Black</small>
              <b>Black</b>
              <span>#181818</span>
            </div>
          </div>
        </section>
        <hr className="ob-rule" />
        <section>
          <div className="ob-num">04</div>
          <h3 className="ob-heading">Logo &amp; systém</h3>
          <div className="ob-logo-system">
            <div className="ob-logo-panel ob-logo-panel-yellow ob-logo-panel-single">
              <img width={264} height={324} alt="Café Olbracht žluté logo" src="/images/cafe-olbracht-logo.png" {...deferredImageProps} />
            </div>
            <div>
              <div className="ob-copy ob-logo-copy" style={{ marginTop: "22px", maxWidth: "720px" }}>
                Logo je inspirováno tvarem kávového zrna. Jednoduchý symbol funguje jako výrazný prvek identity — od výlohy přes kelímky až po drobné provozní detaily.
              </div>
            </div>
          </div>
        </section>
        <hr className="ob-rule" />
        <section className="ob-apps-section-large">
          <div className="ob-num">05</div>
          <h3 className="ob-heading">Aplikace identity</h3>
          <div className="ob-apps">
            <div className="ob-app-card">
              <img width={2048} height={1365} alt="Café Olbracht zástěry" src="/images/cafe-olbracht-aprons.webp" {...deferredImageProps} />
            </div>
            <div className="ob-app-card">
              <img width={2048} height={1337} alt="Café Olbracht kelímek" src="/images/cafe-olbracht-cup.webp" {...deferredImageProps} />
            </div>
          </div>
        </section>
        <hr className="ob-rule" />
        <section>
          <div className="ob-num">06</div>
          <h3 className="ob-heading">Fotky provozu</h3>
          <div className="ob-photo-grid">
            <img width={932} height={797} alt="Café Olbracht provoz" src="/images/cafe-olbracht-interior.webp" {...deferredImageProps} />
            <img width={400} height={533} alt="Café Olbracht provoz" src="/images/cafe-olbracht-service.webp" {...deferredImageProps} />
            <img width={897} height={1196} alt="Café Olbracht provoz" src="/images/cafe-olbracht-main.webp" {...deferredImageProps} />
          </div>
          <p className="ob-photo-final-text">Lokální kavárna s vlastním rytmem. Výsledkem je vizuální identita připravená pro každodenní provoz — od loga přes typografii až po drobné aplikace značky.</p>
        </section>
      </div>
    </div>
  );
}

function CotyplotyDetail() {
  return (
    <div id="cotyploty-vondrart-overlay" className="is-open">
      <CloseLink className="cp-close" />
      <div aria-label="Co ty ploty projekt" aria-modal="true" className="cp-sheet" role="dialog">
        <div className="cp-topline">
          <div className="cp-brand-mini">Co ty ploty / brand identity</div>
        </div>
        <section className="cp-hero">
          <div>
            <div className="cp-kicker">01 — Brand Identity</div>
            <h2 className="cp-title">
              Co ty
              <br />
              <strong>ploty</strong>
            </h2>
            <p className="cp-claim">Jednoduchá vizuální identita pro rodinnou firmu zaměřenou na montáž plotů.</p>
            <div className="cp-tags">
              <span className="cp-tag">Brand Identity</span>
              <span className="cp-tag">Logo System</span>
              <span className="cp-tag">Color System</span>
              <span className="cp-tag">Campaigns</span>
            </div>
          </div>
          <div>
            <div className="cp-hero-card">
              <img width={836} height={458} alt="Co ty ploty logo" src="/images/co-ty-ploty-logo.png" {...deferredImageProps} />
            </div>
            <div className="cp-meta">
              <div>
                <span>Studio</span>
                <strong>vondrart</strong>
              </div>
              <div>
                <span>Rok</span>
                <strong>2025</strong>
              </div>
              <div>
                <span>Kategorie</span>
                <strong>Rodinná firma</strong>
              </div>
              <div>
                <span>Výstup</span>
                <strong>Logo &amp; reklamy</strong>
              </div>
            </div>
          </div>
        </section>
        <hr className="cp-rule" />
        <section className="cp-grid">
          <div>
            <div className="cp-num">02</div>
            <h3 className="cp-heading">Zadání</h3>
          </div>
          <div className="cp-copy">
            <p>Co ty ploty je rodinná firma, která potřebovala rychle a srozumitelně vstoupit do online prostoru.</p>
            <p>Navrhli jsme jednoduchou identitu a připravili základ pro výkonnostní komunikaci na Meta a Google reklamách.</p>
          </div>
        </section>
        <hr className="cp-rule" />
        <section>
          <div className="cp-num">03</div>
          <h3 className="cp-heading">Logo &amp; barevný systém</h3>
          <div className="cp-logo-showcase">
            <div className="cp-logo-card cp-logo-card--mark">
              <img width={836} height={458} alt="Co ty ploty symbol logo" src="/images/co-ty-ploty-symbol-logo.png" {...deferredImageProps} />
            </div>
            <div className="cp-logo-card cp-logo-card--horizontal">
              <img width={1474} height={454} alt="Co ty ploty vodorovné logo" src="/images/co-ty-ploty-horizontal-logo.png" {...deferredImageProps} />
            </div>
          </div>
          <div className="cp-palette-built">
            <div className="cp-swatch" style={{ background: "#F0EDE4", color: "#004643" }}>
              <small>Light Base</small>
              <b>Soft concrete</b>
              <span>
                HEX #F0EDE4
                <br />
                CMYK 7 / 6 / 12 / 0
              </span>
            </div>
            <div className="cp-swatch" style={{ background: "#004643", color: "#F0EDE4" }}>
              <small>Primary</small>
              <b>Fence green</b>
              <span>
                HEX #004643
                <br />
                CMYK 91 / 43 / 60 / 52
              </span>
            </div>
          </div>
          <div aria-label="Gradient z barev Co ty ploty" className="cp-gradient-strip" />
        </section>
        <hr className="cp-rule" />
        <section>
          <div className="cp-num">04</div>
          <h3 className="cp-heading">Připravené pro reklamy</h3>
          <div className="cp-ad-layout">
            <div className="cp-ad-card">
              <img width={1350} height={1350} alt="Ukázka reklamního banneru Co ty ploty" src="/images/co-ty-ploty-banner.webp" {...deferredImageProps} />
            </div>
            <div className="cp-ad-copy">
              <h4>Rychle pochopitelné sdělení pro výkon.</h4>
              <p>Pro Meta a Google reklamy jsme identitu navrhli tak, aby fungovala během pár vteřin: výrazný kontrast, jednoduché logo, jasná služba a přímý headline. Komunikace tak může stát hlavně na tom, co rodinná firma reálně nabízí — zaměření, montáž a plot na klíč bez zbytečných komplikací.</p>
            </div>
          </div>
        </section>
        <hr className="cp-rule" />
        <section className="cp-closing">
          <div>
            <h3>Plot na klíč. Bez zbytečných komplikací.</h3>
            <p>Výsledkem je přímočará identita pro službu, která má být jasná hned na první pohled.</p>
          </div>
          <img width={836} height={458} alt="Co ty ploty symbol" src="/images/co-ty-ploty-symbol.png" {...deferredImageProps} />
        </section>
      </div>
    </div>
  );
}

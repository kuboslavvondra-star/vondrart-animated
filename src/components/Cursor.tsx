export function Cursor() {
  return (
    <div className="cursor" aria-hidden="true">
      {/* Kontextový obsah kurzoru (brand logo nad kartami). src nastavuje
          public/site-interactions.js dle data-cursor-image hoverovaného prvku. */}
      <img className="cursor-media" alt="" decoding="async" />
    </div>
  );
}

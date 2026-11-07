/**
 * Credit link to the studio that built the site. A plain text link with the brand
 * name as its text; the look lives in the `.sl-credit` rules in app/globals.css.
 * The spaces between the parts keep the link text "tvorba webu › siteleveled" for screen
 * readers and search engines; flex layout ignores them visually.
 */
export default function SiteLeveledCredit() {
  return (
    <a
      className="sl-credit"
      href="https://siteleveled.com/"
      target="_blank"
      rel="noopener"
    >
      <span className="sl-credit__prompt">tvorba webu</span>{" "}
      <span className="sl-credit__sep" aria-hidden="true">
        ›
      </span>{" "}
      <span className="sl-credit__type">
        <span className="sl-credit__name">siteleveled</span>
        <span className="sl-credit__caret" aria-hidden="true" />
      </span>
    </a>
  );
}

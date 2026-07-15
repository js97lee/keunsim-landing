import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function MobilePageShell({
  children,
  shellClassName = "",
  mainClassName = "",
  mainId,
  showFooter = true,
  overlay = null,
}) {
  return (
    <div className={`mobile-page ${shellClassName}`.trim()}>
      <SiteHeader />
      <main className={mainClassName} id={mainId}>
        {children}
      </main>
      {showFooter ? <SiteFooter /> : null}
      {overlay}
    </div>
  );
}

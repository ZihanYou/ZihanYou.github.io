export function Footer({ updated }: { updated: string }) {
  return (
    <footer className="site-footer">
      <div className="shell">
        <p>
          Last updated {updated}. Layout adapted from{" "}
          <a href="https://github.com/xyjoey/PRISM">PRISM</a>.
        </p>
      </div>
    </footer>
  );
}

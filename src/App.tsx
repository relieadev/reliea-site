import { useState } from "react";
import "./App.css";

function Header() {
  const websiteName = "Reliea's Website";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hp-header">
      <div className="hp-header-brand">
        <a className="brand" href="/">
          {websiteName}
        </a>

        <p>Reliea's introduction site</p>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Menu"
      >
        ☰
      </button>

      <nav className={`hp-nav ${menuOpen ? "is-open" : ""}`}>
        <a href="/introduction">Introduction</a>
        <a href="/work">Work</a>
        <a href="/study-logs">StudyLogs</a>
        <a href="/blog">Blog</a>
        <a href="/playground">Playground</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="hp-footer">
      <p>© 2026 Reliea Introduced-page</p>
    </footer>
  );
}

function ImagePlaceholder() {
  return(
    <div className="image-placeholder">
      <div className="placeholder-sun" />
      <div className="placeholder-mountain" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hp-hero">
      <div className="hp-hero-text">
        <h1>Welcome to Reliea's Website</h1>
        <p className="hp-hero-subtitle">
          Build, Learn, and Explore.
        </p>

        <p className="hp-hero-description">
          A personal site about cloud, software, security and my other works.
        </p>
      </div>

    <ImagePlaceholder />

    </section>
  );
}

function App() {
  return (
    <main className="hp-main">
      <Header />

      <Hero />

      <Footer />
    </main>
  );
}

export default App;

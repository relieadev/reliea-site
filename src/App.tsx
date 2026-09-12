import { useState } from "react";
import "./App.css"

function Header() {
  const websiteName = "Reliea's Website";
  const [menuOpen, setMenuOpen] = useState(false);

  return(
      <header className="hp-header">
        <a className="brand" href="/">
          {websiteName}
        </a>
        
        <p>Reliea's introduction site</p>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Menu"
        >
          
          ☰
        
        </button>

        <nav className={'hp-nav ${menuOpen ? "is-Open" : ""}'}>
          <a href="/introduction">Introduction</a>
          <a href="/work">Work</a>
          <a href="study-logs">StudyLogs</a>
          <a href="blog">Blog</a>
          <a href="playground">Playground</a>
        </nav>
      </header>
  )
}

function Footer() {

  return(
    <footer className="hp-footer">
      <p>©︎ 2026 Reliea Introduced-page</p>
    </footer>
  )
}

function App() {

  return(
    <main className="hp-main">
      <Header />

      <section className="hp-content">
        <h1>Welcome to Reliea's Website</h1>
        <p>Build, Learn, and Explore.</p>
      </section>

      <Footer />
    </main>
    )
}

export default App
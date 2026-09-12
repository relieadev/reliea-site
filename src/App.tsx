function Header() {
  const websiteName = "Reliea's Website";

  return(
      <header>
      <h1>{websiteName}</h1>
      <p>Reliea's introduction site</p>

      <nav className="hpNav">
        <a href="/introduction">Introduction</a>
        <a href="/work">Work</a>
        <a href="study-logs">StudyLogs</a>
        <a href="blog">Blog</a>
        <a href="Playground">Playground</a>
      </nav>
      </header>
  )
}

function Footer() {

  return(
    <footer>
      <p>©︎ 2026 Reliea Introduced-page</p>
    </footer>
  )
}

function App() {

  return(
    <main>
      <Header />

      <Footer />
    </main>
    )
}

export default App
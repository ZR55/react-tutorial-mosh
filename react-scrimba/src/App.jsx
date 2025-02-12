/**
 * Challenge:
 * 
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */

function Header() {
  return (
      <header className="header">
          <img className="nav-logo" src="./public/react-logo.png" alt="React logo" />
          <nav>
            <ul className="nav-list">
              <li className="nav-list-item">Pricing</li>
              <li className="nav-list-item">About</li>
              <li className="nav-list-item">Contact</li>
            </ul>
          </nav>
      </header>
  )
}

function MainContent() {
  return (
      <main>
          <h1>Reason I am excited to learn React</h1>
          <ol>
              <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
              <li>I am more likely to get a job as a front end developer if I know React</li>
          </ol>
      </main>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2024 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function App() {
  return (
      <>
          <Header />
          <MainContent />
          <Footer />
      </>
  )
}


export default App

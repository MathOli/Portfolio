import Rotas from './routes';

const App = () => {
  return(
    <>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </nav>
      </header>
      <Rotas/>
    </>
  )
}

export default App;
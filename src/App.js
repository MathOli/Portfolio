import Rotas from './routes';
import Aside from './components/Aside';
import './App.css';

const App = () => {
  return(
    <section>
        <Aside />
        <main>
          <Rotas/>
        </main>
    </section>
  )
}

export default App;
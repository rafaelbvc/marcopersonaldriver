import './App.css';
import { Footer } from './containers/footer/Footer';
import { Header } from './containers/header/Header';
import { Inicio } from './pages/inicio/Inicio';

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Footer />
    </div>
  );
}

export default App;

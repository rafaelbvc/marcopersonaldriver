import { Route, Routes } from 'react-router';
import './App.css';
import { Footer } from './containers/footer/Footer';
import { Header } from './containers/header/Header';
import { Inicio } from './pages/inicio/Inicio';
import { Painel } from './pages/painel/Ppainel';
import { Error } from "./pages/error/Error"
import { Midia } from './pages/midia/Midia';
import { Contato } from './pages/contato/Contato';




function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/" element={<Inicio />} />
        
        <Route path="/painel" element={<Painel />} />

        <Route path="/midia" element={<Midia/>} />

        <Route path="/contato" element={<Contato />} />

        <Route path="*" element={<Error />} />

      </Routes>

      <Footer />


    </div>
  );
}

export default App;

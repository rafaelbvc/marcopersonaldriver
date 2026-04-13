import { Route, Routes } from 'react-router';
import './App.css';
import { Footer } from './containers/footer/Footer';
import { Header } from './containers/header/Header';
import { Inicio } from './pages/inicio/Inicio';
import { Painel } from './pages/painel/Ppainel';
import { Error } from "./pages/error/Error"




function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path="/" element={<Inicio />} />
        
        <Route path="/painel" element={<Painel />} />

        <Route path="*" element={<Error />} />

      </Routes>

      <Footer />


    </div>
  );
}

export default App;

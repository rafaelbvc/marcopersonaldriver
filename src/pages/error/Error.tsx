import "./ErrorCSS.css"
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className="error-container">
            <h1>404 - Página não encontrada</h1>
            <p>Ops! O caminho que você tentou acessar não existe.</p>
            <Link color="blue" to="/">Voltar para o Início</Link>
        </div>
    );
};

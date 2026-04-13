import { Link } from 'react-router-dom';
import { ButtonsHeader } from '../../components/buttons/ButtonsHeader';
import './HeaderCSS.css';





export const Header =() => {
    return (

        <div className="header-container">

            <div>

                logotipo

            </div>

            <nav>

                <Link to="/">{<ButtonsHeader textp="Inicio" />}</Link>
                 |
                 <Link to="/painel"><ButtonsHeader textp="Painel" /></Link>
                 |
                 <ButtonsHeader textp="Mídia" />
                 |
                 <ButtonsHeader textp="Contato" />
                 <span className="span-contato">|
                 </span>

            </nav>
        </div>



    )
}
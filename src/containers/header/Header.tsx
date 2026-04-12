import { ButtonsHeader } from '../../components/buttons/ButtonsHeader';
import './HeaderCSS.css';





export const Header =() => {
    return (

        <div className="header-container">

            <div>

                logotipo

            </div>

            <div>
                <ButtonsHeader textp="Inicio" />
                 |
                 <ButtonsHeader textp="Painel" />
                 |
                 <ButtonsHeader textp="Mídia" />
                 |
                 <ButtonsHeader textp="Contato" />
                 <span className="span-contato">|</span>

            </div>
        </div>



    )
}
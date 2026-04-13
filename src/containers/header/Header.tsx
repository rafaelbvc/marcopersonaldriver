import { Link } from 'react-router-dom';
import { ButtonsHeader } from '../../components/buttons/ButtonsHeader';
import './HeaderCSS.css';
import { useState } from 'react';
import { ModalPainel } from '../../components/modal/MmodalPainel';





export const Header =() => {

    const [modalOpen, setModalOpen] = useState(false)



    return (

        <div className="header-container">

            <div>

                logotipo

            </div>

            <nav>

                <Link to="/">{<ButtonsHeader textp="Inicio" />}</Link>
                 |
                 <Link to="/painel" onClick={() => setModalOpen(true)}><ButtonsHeader textp="Painel" /></Link>
                 |
                 <Link to="/modal"><ButtonsHeader textp="Mídia" /></Link>
                 |
                 <ButtonsHeader textp="Contato" />
                 <span className="span-contato">|
                 </span>

            </nav>
            <ModalPainel isOpen={modalOpen} setModal={() => setModalOpen(!modalOpen)}>
                aqui tudo que eu faco vai para o lado
            </ModalPainel>
        </div>



    )
}
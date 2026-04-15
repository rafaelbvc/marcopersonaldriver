import { Link } from "react-router"
import "./ModalCSS.css"
import IModalPainel from "../../interfaces/IModalPainel"
import { FC } from "react"


export const ModalPainel: FC<IModalPainel> = ({ isOpen, children, setModal }) => {

    // checa se esta aberta a modal
    if (!isOpen) return null

    return (

        <div className="modal-background">

            <nav className="modal-content">
                {/* para ir pra home caso tente fechar a modal */}
                <Link to="/" onClick={setModal}>
                    <button className="button-close">×</button>
                </Link>

                <div>
                    {/* traz tudo que esta encapsulado no elemento */}
                    {children}
                </div>
            </nav>


        </div>

    )

}
import { Link } from "react-router"
import "./ModalCSS.css"
import IModalPainel from "../../interfaces/IModalPainel"


export const ModalPainel = ({ isOpen, children, setModal }: IModalPainel) => {

    if (!isOpen) return null

    return (

        <div className="modal-background">

            <nav className="modal-content">
                <Link to="/" onClick={setModal}>
                    <button className="button-close">×</button>
                </Link>

                <div>
                    {children}
                </div>
            </nav>


        </div>

    )

}
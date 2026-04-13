import './HeaderCSS.css';
import { Link, useLocation } from 'react-router-dom';
import { ButtonsHeader } from '../../components/buttons/ButtonsHeader';
import { useEffect, useState } from 'react';
import { ModalPainel } from '../../components/modal/MmodalPainel';





export const Header = () => {


    const location = useLocation()

    const [modalOpen, setModalOpen] = useState(false)

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const modalWords = "1"
    const modalNumbers = "1"

    const handleLogin = () => {
        if (login === modalWords && senha === modalNumbers) {
            setModalOpen(false)
        } else {
            setError("Login e ou Senha incorretos")
        }

    }

    useEffect(() => {
        if (location.pathname === "/painel") {
            setModalOpen(true)
        }
    }, [location])

    useEffect(() => {
        if (modalOpen) {
            setLogin("")
            setSenha("")
            setError("")
        }
    }, [modalOpen])


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
                <div className="container-modal">
                    <p className="bemvindo-login">Bem vindo Marco, login:<br/> admin: 1, senha: 1, por hora</p>

                    <input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        className="input-login"
                    />

                    <input
                        type="text"
                        placeholder="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="input-senha"
                    />


                    <button onClick={handleLogin} className="botao-login">

                        Entrar

                    </button>

                    {error && (
                        <span className="input-error">
                            {error}
                        </span>
                    )
                }

                </div>

            </ModalPainel>
        </div>



    )
}
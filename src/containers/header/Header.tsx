import "./HeaderCSS.css";
import { Link, useLocation } from "react-router-dom";
import { ButtonsHeader } from "../../components/buttons/ButtonsHeader";
import { useEffect, useState, ChangeEvent, FC } from "react";
import { ModalPainel } from "../../components/modal/MmodalPainel";

export const Header: FC = () => {

    //pega a url em que esta
    const location = useLocation();

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    
    const [login, setLogin] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [error, setError] = useState<string>("");

    const modalWords = "1";
    const modalNumbers = "1";

    //comparação para login
    const handleLogin = (): void => {
        if (login === modalWords && senha === modalNumbers) {
            setModalOpen(false);
        } else {
            setError("Login e ou Senha incorretos");
        }
    };

    useEffect(() => {
        if (location.pathname === "/painel") {
            setModalOpen(true);
        }
    }, [location]);

    useEffect(() => {
        if (modalOpen) {
            setLogin("");
            setSenha("");
            setError("");
        }
    }, [modalOpen]);
    //evento dos inputs por convenção
    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
    const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);

    return (
        <div className="header-container">
            <span>logotipo</span>

            <nav>
                <Link to="/"><ButtonsHeader textp="Inicio" /></Link>

                |
                <Link to="/painel" onClick={() => setModalOpen(true)}>
                    <ButtonsHeader textp="Painel" />
                </Link>
                |
                <Link to="/midia"><ButtonsHeader textp="Mídia" /></Link>

                |
                <Link to="/contato"><ButtonsHeader textp="Contato" /></Link>
                <span className="span-contato">|</span>
            </nav>

            <ModalPainel isOpen={modalOpen} setModal={() => setModalOpen(!modalOpen)}>
                <div className="container-modal">
                    <p className="bemvindo-login">
                        Bem vindo Marco<br/> login: admin: 1, senha: 1, por hora
                    </p>

                    <input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={handleLoginChange}
                        className="input-login"
                    />

                    <input
                        type="password"
                        placeholder="senha"
                        value={senha}
                        onChange={handleSenhaChange}
                        className="input-senha"
                    />

                    <button onClick={handleLogin} className="botao-login">
                        Entrar
                    </button>

                    {error && <span className="input-error">{error}</span>}
                </div>
            </ModalPainel>
        </div>
    );
};

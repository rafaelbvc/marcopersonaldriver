import "./HeaderCSS.css";
import { Link, useLocation } from "react-router-dom";
import { ButtonsHeader } from "../../components/buttons/ButtonsHeader";
import {
  useEffect,
  useState,
  ChangeEvent,
  FC,
  SubmitEventHandler,
} from "react";
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
  const handleLogin: SubmitEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();

    if (login === modalWords && senha === modalNumbers) {
      setModalOpen(false);
    } else {
      setLogin("");
      setSenha("");
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
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value);
  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSenha(e.target.value);

  return (
    <div className="header-container">
      <span>logotipo</span>

      <nav>
        <Link to="/">
          <ButtonsHeader textp="Inicio" />
        </Link>
        |
        <Link to="/painel" onClick={() => setModalOpen(true)}>
          <ButtonsHeader textp="Painel" />
        </Link>
        |
        <Link to="/midia">
          <ButtonsHeader textp="Mídia" />
        </Link>
        |
        <Link to="/contato">
          <ButtonsHeader textp="Contato" />
        </Link>
        <span className="span-contato">|</span>
      </nav>

      <ModalPainel isOpen={modalOpen} setModal={() => setModalOpen(!modalOpen)}>
        <div className="container-modal">
          <p className="bemvindo-login">
            Bem vindo Marco
            <br /> login: Admin: 1, Senha: 1, por hora
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={handleLoginChange}
              className="input-login"
              required
            />

            <input
              type="password"
              placeholder="senha"
              value={senha}
              onChange={handleSenhaChange}
              className="input-senha"
              required
            />

            <button type="submit" className="botao-login">
              Entrar
            </button>

            {error && <span className="input-error">{error}</span>}
          </form>
        </div>
      </ModalPainel>
    </div>
  );
};

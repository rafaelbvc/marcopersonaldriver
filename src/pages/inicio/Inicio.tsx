import "./InicioCSS.css"
import InicioImg from "../../assets/backgroundPages/inicioIMG.jpg"
import { FC } from "react";




export const Inicio: FC = () => {
    return (
        <div className="inicio-container" style={{
            backgroundImage: `url(${InicioImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="inicio-conteudo-um">
                <span className="span-conteudo-um">SEGURANÇA</span>
                <span className="span-conteudo-um">CONFORTO</span>
                <span className="span-conteudo-um">RAPIDEZ</span>
                <span className="span-conteudo-um">DISPONIBILIDADE</span>
                <span className="span-conteudo-um">CONFIANÇA</span>
                <span className="span-conteudo-um">LUXO</span>
            </div>
            <div className="inicio-conteudo-dois">
                <h3 className="htres-conteudo-dois">MARCO PERSONAL DRIVER:<br/>EXCELÊNCIA EM CADA TRAJETO</h3>
                <p className="p-conteudo-dois">OFEREÇO SERVIÇOS DE TRANSPORTE EXECUTIVO COM FOCO EM PONTUALIDADE, SEGURANÇA E DISCRIÇÂO</p>
                <p className="p-conteudo-dois">SEJA PARA TRANSFER DE AEPORTOS, EVENTOS CORPORATIVOS, SHOWS, CONSULTAS, OU LOGÍSTICA DIÁRIA, 
                                               GARANTO UM DESLOCAMENTO EFICIENTE E CONFORTÁVEL PARA QUEM NÃO PODE PERDER TEMPO</p>
            </div>
        </div>
    );
};
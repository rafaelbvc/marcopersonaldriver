import "./InicioCSS.css"
import InicioImg from "../../assets/backgroundPages/inicioIMG.jpg"




export const Inicio = () => {
    return (
        <div className="inicio-container" style={{
            backgroundImage: `url(${InicioImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="inicio-conteudo-um">
                <span className="span-conteudo-um">Segurança</span>
                <span className="span-conteudo-um">Conforto</span>
                <span className="span-conteudo-um">Rapidez</span>
                <span className="span-conteudo-um">Disponibilidade</span>
                <span className="span-conteudo-um">Confiança</span>
                <span className="span-conteudo-um">Luxo</span>
            </div>
            <div className="inicio-conteudo-dois"></div>
        </div>
    );
};
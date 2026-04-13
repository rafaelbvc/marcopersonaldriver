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
            <div className="inicio-conteudo-um"></div>
            <div className="inicio-conteudo-dois"></div>
        </div>
    );
};
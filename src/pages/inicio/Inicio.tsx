import { Footer } from "../../containers/footer/Footer"
import { Header } from "../../containers/header/Header"
import "./InicioCSS.css"
import InicioImg from "../../assets/backgroundPages/inicio1jpg.jpg"


export const Inicio = () => {

    return (
        <div className="inicio-container">
            <div  
            style={{
            "backgroundImage": `url(${InicioImg})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}>
                <div > 
        
                </div> 
            </div>
        </div>
    )


}
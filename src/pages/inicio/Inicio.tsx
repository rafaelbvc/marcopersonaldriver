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
            backgroundRepeat: "no-repeat",
            }}>
                <div > 
        
                </div> 
            </div>
        </div>
    )


}
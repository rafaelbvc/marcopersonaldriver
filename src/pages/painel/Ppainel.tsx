import PainelIMG from "../../assets/backgroundPages/inicio2jpg.jpg"
import Formulario from "../../forms/Formulario"




export const Painel = () => {
    return (

        <div className="painel-container">


            <div style={{
                         backgroundImage: `url(${PainelIMG})`, 
                         width: "100vw", 
                         height: "100vh", 
                         backgroundSize: "cover", 
                         backgroundPosition: "center", 
                         backgroundRepeat: "no-repeat"
                         }}>




                <Formulario />
            </div>


        </div>


    )
}
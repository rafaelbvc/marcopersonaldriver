import { FC } from "react"
import PainelIMG from "../../assets/backgroundPages/painelIMG.jpg"
import Formulario from "../../forms/Formulario"




export const Painel: FC = () => {
    return (

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

    )
}
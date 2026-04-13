import "./ContatoCSS.css"
import ContatoIMG from "../../assets/backgroundPages/contatoIMG.jpg"


export const Contato = () => {

    return (

            <div style={{
                backgroundImage:`url(${ContatoIMG})`,
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"

            }}>
            </div>

    )

}
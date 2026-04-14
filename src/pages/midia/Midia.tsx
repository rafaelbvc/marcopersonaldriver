import { FC } from "react"
import "./MidiaCSS.css"
import Carousel from "../../components/carousel/Carousel"
import MidiaIMG from "../../assets/backgroundPages/midiaIMG.jpg"
import InicioIMG from "../../assets/backgroundPages/inicioIMG.jpg"
import PainelIMG from "../../assets/backgroundPages/painelIMG.jpg"
import ContatoIMG from "../../assets/backgroundPages/contatoIMG.jpg"



export const Midia: FC = () => {

    const myImages = [PainelIMG, ContatoIMG, MidiaIMG, InicioIMG]

    return (
        <div className="midia-container">
            {/* <div style={{
            backgroundImage: `url(${MidiaIMG})`,
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>*/}

            <Carousel images={myImages} />

        </div>


    )

}
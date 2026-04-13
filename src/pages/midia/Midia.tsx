import "./MidiaCSS.css"
import MidiaIMG from "../../assets/backgroundPages/midiaIMG.jpg"


export const Midia = () => {

    return (

        <div style={{
            backgroundImage: `url(${MidiaIMG})`,
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>

        </div>


    )

}
import PainelIMG from "../../assets/backgroundPages/inicio2jpg.jpg"




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





            </div>


        </div>


    )
}
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
            <div className="inicio-conteudo-dois">
                <h3 className="htres-conteudo-dois">Marco Personal Driver:<br/>Excelência em cada trajeto</h3>
                <p className="p-conteudo-dois">Ofereço serviços de transporte executivo com foco em pontualidade, segurança e discrição</p>
                <p className="p-conteudo-dois">Meu veículo é de alto padrão, conduzido por motorista treinado para atender agendas exigentes</p>
                <p className="p-conteudo-dois">Seja para transfer de aeroportos, eventos corporativos, shows, consultas, ou logística diária, 
                                               garanto um deslocamento eficiente e confortável para quem não pode perder tempo</p>
            </div>
        </div>
    );
};
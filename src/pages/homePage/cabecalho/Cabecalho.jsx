import "./Cabecalho.css"
import { Link } from 'react-router-dom';
import video from "../../../assets/videos/background-video.mp4";
export default function Cabecalho() {
    return (
        <section className="cabecalho"> 

            <video className="video-background" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Seu browser não suporte este tipo de arquivo de vídeo.
            </video>

            <div className="overlay">
                <h1>
                    Soluções Tecnológicas Personalidas. <br/> Do inicio ao fim!
                </h1>
                <p>
                    Desenvolvimento de aplicações web e mobile sob medida, focado em entregar resultados que impulsional o seu negócio.
                </p>
                <Link to='/contato'>
                    <button type="button" className="destaque">
                        Contato
                    </button>
                </Link>
            </div>
        </section>
    )
}
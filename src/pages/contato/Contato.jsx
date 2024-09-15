import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import videoContato from '../../assets/videos/background-contato.mp4'
export default function Contato() {
    return (
        <main className="container position-relative">
            {/* Vídeo de Fundo */}
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    className="video-background"
                >
                    <source src={videoContato} type="video/mp4" />
                    Seu navegador não suporta o vídeo.
                </video>
            </div>

            {/* Conteúdo Principal */}
            <div className="content-overlay">
                <h1 className="text-center mt-5">Entre em Contato</h1>
                
                {/* Redes Sociais */}
                <section className="social-media text-center mt-4">
                    <h2>Siga-nos nas Redes Sociais</h2>
                    <div className="d-flex justify-content-center mt-3">
                        <a href="https://wa.me/5511956811112?text=Ol%C3%A1,%20pode%20me%20ajudar?%20" className="mx-3" target="_blank" rel="noreferrer">
                            <FaWhatsapp size={40} />
                        </a>
                        <a href="https://www.facebook.com/jcruzsolucoestech/" className="mx-3" target="_blank" rel="noreferrer">
                            <FaFacebook size={40} />
                        </a>
                        <a href="https://www.instagram.com/jcruz_solucoes_tech/" className="mx-3" target="_blank" rel="noreferrer">
                            <FaInstagram size={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/jcruz-solucoes-tech/" className="mx-3" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </div>
                </section>

                {/* Informações de Contato */}
                <section className="contact-info text-center mt-5">
                    <h2>Informações de Contato</h2>
                    <p>Email: <a href="mailto:contato@jcruzsolucoestech.com">contato@jcruzsolucoestech.com</a></p>
                    <p>Celular: <a href="tel:+5511956811112">(11) 95681-1112</a></p>
                </section>

                {/* Formulário de Contato */}
                <section className="contact-form mt-5 mb-5">
                    <h2 className="text-center">Envie-nos uma Mensagem</h2>
                    <form className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Seu nome" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Seu email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mensagem</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Sua mensagem" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                </section>
            </div>
        </main>
    );
}
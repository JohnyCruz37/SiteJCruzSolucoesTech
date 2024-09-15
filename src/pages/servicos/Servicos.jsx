import "./Servicos.css"
import video from "../../assets/videos/codificacao.mp4"
import CardComponent from "../../Components/card/Card";
const services = [
    {
      title: "Back-end",
      description: "Desenvolvimento de sistemas robustos e APIs, utilizando tecnologias como Python, Node.js, Flask, Banco de dados relacionais e não relacionais e serviços em nuvem ou VPS."
    },
    {
      title: "Front-end",
      description: "Criação de interfaces responsivas e modernas com HTML, CSS, Javascript, e frameworks como React.js, Bootstrap, Vite, SASS, entre outros."
    },
    {
      title: "Design",
      description: "Prototipagem e design de interfaces no Figma, garantindo uma experiência do usuário fluida e intuitiva. Validação da ideia antes do desenvolvimento."
    },
    {
      title: "Integrações",
      description: "Conecte seus sistemas de maneira eficiente, integrando APIs e garantindo o fluxo perfeito de informações."
    }
  ];
export default function Servicos() {
    return (
        <main className="container">
            <div className="row">
                <section className="col-4 servicos-textos">
                  <div className="conteudo-servicos">
                    <div className="titulo">
                      <h1>Serviços</h1>
                      <p>Desenvolvimento Completo de Aplicações.</p>
                    </div>

                    <h6>
                        Oferecemos soluções completas de desenvolvimento, cuidando de todas as fases do projeto:
                        Prototipagem, Levantamento de requisitos, Design, Frontend, Backend, Integração, Lançamento e Suporte.
                        Tudo personalizado para garantir o sucesso do seu negócio.
                        Você se preocupa com aquilo que é essencial para a sua empresa e nós oferecemos a melhor solução em tecnologia.
                    </h6>
                  </div>
                    <video className="video-background" autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        Seu browser não suporte este tipo de arquivo de vídeo.
                    </video>
                </section>
                <section className="col-8 section-cards">
                    <h5>Serviços Específicos</h5>
                    <div className="row area-cards">
                        {services.map((service, index) => (
                            <div className="col-md-6 col-lg-4 mb-4 div-card" key={index}>
                            <CardComponent title={service.title} description={service.description} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
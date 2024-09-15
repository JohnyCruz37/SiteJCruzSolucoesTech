import Logo from "../../assets/Logo2.png"
import johny from "../../assets/johny.jpeg"
import "./Sobremim.css"
import CardComponent from "../../Components/card/Card"
import { FaGlobeAsia, FaRocket, FaHandshake, FaStar, FaUserTie, FaBullseye, FaEye  } from 'react-icons/fa';

const services = [
    {
      title: "MISSÃO",
      description: "Desenvolver soluções tecnológicas personalizadas e inovadoras, com foco nas necessidades dos nossos clientes, entregando produtos de alta qualidade que impulsionem seus negócios e contribuam para o sucesso de suas operações.",
      icon: <FaBullseye /> 
    },
    {
      title: "VISÃO",
      description: "Ser reconhecida como uma referência em processo de desenvolvimento de softwares e aplicativos, proporcionando tecnologia de ponta e soluções eficientes que transformem a forma como empresas e pessoas interagem com o mundo digital.",
      icon: <FaEye />
    },
    {
      title: "VALORES",
      description: [
        {
          title: "Transparência",
          icon: <FaGlobeAsia />,
          description: "Manter uma comunicação aberta e honesta em todas as fases do projeto."
        },
        {
          title: "Inovação",
          icon: <FaRocket />,
          description: "Criar soluções que superem as expectativas e estejam à frente do tempo."
        },
        {
          title: "Compromisso",
          icon: <FaHandshake />,
          description: "Ser um parceiro estratégico, focado em entender e solucionar as necessidades dos clientes."
        },
        {
          title: "Qualidade",
          icon: <FaStar />,
          description: "Garantir a excelência técnica e de entrega em todos os projetos."
        },
        {
          title: "Ética Profissional",
          icon: <FaUserTie />,
          description: "Agir com integridade em todas as nossas relações comerciais."
        }
      ]
    }
  ];
export default function SobreMim() {
    return (
        <main className="container">
            <section id="quem-somos" className="container mt-5">
                <div className="row align-items-center">
                    {/* Quem Somos - Texto na primeira parte, imagem na segunda */}
                    <div className="col-lg-6">
                    <h2>Quem Somos</h2>
                    <p>Somos uma empresa nova no mercado, formada por um time altamente qualificado com expertise técnica de alto nível. Nosso foco é o desenvolvimento de softwares e aplicativos personalizados, sempre alinhados com as necessidades dos nossos clientes.</p>
                    <p>Nossa missão é fornecer soluções inovadoras, eficientes e que entreguem valor de verdade. Atuamos em todas as etapas do desenvolvimento, desde a prototipagem até a entrega final, oferecendo um suporte completo e uma parceria estratégica para o sucesso dos seus projetos.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={Logo} alt="Imagem sobre a empresa" className="img-fluid" />
                    </div>
                </div>

                <div className="row align-items-center mt-5 mb-5">
                    {/* Fundador - Imagem na primeira parte, texto na segunda */}
                    <div className="col-lg-6" id="fundador">
                        <img src={johny} alt="Foto do Fundador" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                    <h3>Fundador</h3>
                    <div className="founder-info">
                        <p><strong>Johny Gonçalves da Cruz</strong></p>
                        <p>Formado em Desenvolvimento Web Full Stack e atualmente estudante de Engenharia de Software, Johny é o fundador da JCruz Solução Tech. Com uma paixão intensa por tecnologia e gestão de projetos, ele está sempre em busca de aperfeiçoamento e inovação no desenvolvimento de soluções tecnológicas.</p>
                        <p><em>&quot;Sou apaixonado por tecnologia e gestão de projetos. Sempre buscando aperfeiçoar e melhorar o desenvolvimento. Estudante voraz, dedicado e comprometido. Sou uma pessoa transparente e elogiado pelos clientes pelo meu profissionalismo e transparência.&quot;</em></p>
                    </div>
                    </div>
                </div>
            </section>
            <section id="missao-visao" className="container mt-5">
                <div className="row">
                {services.slice(0, 2).map((service, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <CardComponent title={service.title} description={service.description} icon={service.icon} />
                    </div>
                ))}
                </div>
            </section>
            <section id="valores" className="container mt-5">
                <div className="row d-flex justify-content-center">
                {services[2]['description'].map((service, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <CardComponent title={service.title} description={service.description} icon={service.icon} />
                    </div>
                ))}
                </div>
            </section>
        </main>
    )
}
import CardComponent from "../../Components/card/Card";

const services = [
    {
      title: "Reunião de alinhamento",
      description: "Etapa inicial para definir a melhor estratégia de desenvolvimento. Aqui, levantamos informações essenciais para garantir que o projeto seja executado com excelência desde o início."
    },
    {
      title: "Prototipagem e Design",
      description: "Nesta fase, criamos um protótipo navegável no Figma, garantindo que o desenvolvimento está alinhado às expectativas. Apresentamos o protótipo em uma reunião, ajustando-o conforme necessário."
    },
    {
      title: "Desenvolvimento e Codificação",
      description: "Com o design aprovado, damos foco total ao desenvolvimento. Inclui criação de páginas, integração com banco de dados, validações, lógica de negócio, e preparação da infraestrutura para produção."
    },
    {
      title: "Testes",
      description: "Realizamos testes contínuos durante todo o desenvolvimento, como testes unitários, de integração, de usabilidade e performance, para garantir a qualidade e conformidade do sistema."
    },
    {
      title: "Deploy",
      description: "Finalizado o desenvolvimento, o sistema é disponibilizado em produção ou ambiente de testes. O deploy garante que o sistema atenda todos os requisitos e funcione corretamente para os usuários."
    },
    {
      title: "Suporte",
      description: "Nossa equipe de suporte garante que o sistema funcione conforme esperado. Resolvemos dúvidas, orientamos no uso da plataforma e garantimos que o sistema continue rodando sem problemas."
    }
  ];
  
export default function Desenvolvimento() {
    return (
        <main className="container">
            <h1>Desenvolvimento</h1>
            <p>Etapas de desenvolvimento</p>
            <section className="section-cards">
                <div className="row area-cards">
                    {services.map((service, index) => (
                        <div className="col-md-6 col-lg-4 mb-4 div-card" key={index}>
                          <CardComponent title={service.title} description={service.description} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
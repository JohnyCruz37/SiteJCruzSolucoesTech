import Cabecalho from "./cabecalho/Cabecalho";
import SobreMim from "../sobreMim/SobreMim"
import Servicos from "../servicos/Servicos"
import Desenvolvimento from "../desenvolvimento/Desenvolvimento"
export default function HomePage() {
  return (
    <main className="container">
      <Cabecalho/>
      <Servicos />
      <Desenvolvimento />
      <SobreMim />
  </main>
  )
}

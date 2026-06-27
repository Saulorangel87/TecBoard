import "./App.css";
import { Banner } from "./components/Banner/banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema";

const temas = [
  {
    id: 1,
    nome: "frontend",
  },
  {
    id: 2,
    nome: "backend",
  },
  {
    id: 3,
    nome: "devops",
  },
  {
    id: 4,
    nome: "inteligência artificial",
  },
  {
    id: 5,
    nome: "data science",
  },
  {
    id: 6,
    nome: "cloud",
  },
]

const eventos = [
  {
    capa:'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema:temas[0],
    data: new Date(),
    titulo: "Mulheres no Front"
  }
]

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas}/>
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            <CardEvento evento={eventos[0]} />
          </section>
        )
      })}

      {/* <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  );
}

export default App;

import { useState, useEffect } from "react"; // 1. IMPORTAÇÃO DO USEEFFECT ADICIONADA AQUI
import "./App.css";
import { Banner } from "./components/Banner/banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema";

function App() {

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
  ];

  // 2. USESTATE MODIFICADO PARA LER O NAVEGADOR ANTES DE INICIAR
  const [eventos, setEventos] = useState(function() {
    const eventosSalvos = localStorage.getItem("eventos_tecboard");
    if (eventosSalvos) {
      const dadosConvertidos = JSON.parse(eventosSalvos);
      
      // Converte as strings de data de volta para o formato Date real do JavaScript
      return dadosConvertidos.map(function(ev) {
        return {
          ...ev,
          data: new Date(ev.data)
        };
      });
    }
    
    // Se o navegador estiver vazio, ele carrega esse card padrão abaixo
    return [
      {
        capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
        tema: temas[0],
        data: new Date(),
        titulo: "Mulheres no Front",
      }
    ];
  });

  // 3. EFFECT ADICIONADO AQUI PARA SALVAR AUTOMATICAMENTE A CADA MUDANÇA
  useEffect(function() {
    localStorage.setItem("eventos_tecboard", JSON.stringify(eventos));
  }, [eventos]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map(function (tema) {
          if (!eventos.some(function (evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos.filter(function (evento) {
                  return evento.tema.id == tema.id
                })
                .map(function (evento, indice) {
                  return <CardEvento evento={evento} key={indice} />;
                })}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
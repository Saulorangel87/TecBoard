import "./formulario-de-evento.css";
import { Label } from "../Label";
import { CampoDeformulario } from "../CampoDeformulario";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";


export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Evento</TituloFormulario>
      <CampoDeformulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada
          id="nome"
          placeholder="Summer dev hits"
          name="nomeEvento"
        />
      </CampoDeformulario>
    </form>
  )
}

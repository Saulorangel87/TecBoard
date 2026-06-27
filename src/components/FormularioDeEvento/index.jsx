import "./formulario-de-evento.css";
import { Label } from "../Label";
import { CampoDeformulario } from "../CampoDeformulario";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    console.log('opá, ta na hora de criar um novo evento', formData)
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
      }
      aoSubmeter(evento)
    }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeformulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeformulario>
        <CampoDeformulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="http://..."
            name="capa"
          />
        </CampoDeformulario>
        <CampoDeformulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeformulario>
        <CampoDeformulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeformulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}

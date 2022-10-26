import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { FormContainer } from "react-hook-form-mui";
import { InputText } from "../../input";
import { ButtonUI } from "../../buttonUI/index";


function ModalAnnouncement({ handleHidden, statusModal }: Modalprops) {

  const modal = statusModal
    ? "modal containerModal"
    : "modal containerModal hidden";

  return (
    <ContainerStyled>
      <section className={modal}>
        <div className="modal">
          <div className="modalHeader">
            <h1>Criar anúncio</h1>
            <button className="removedModal" onClick={() => handleHidden()}>
              x
            </button>
          </div>

          <FormContainer>
            <div className="modalBody">
              <p>Tipo de anúncio</p>
              
              <div className="div--field">
                
                <ButtonUI text="Venda" color="primary" variant="contained" />
                <ButtonUI text="Leilão" color="primary" variant="outlined" />
              
              </div>

              <p>Informações do veículo</p>
              
              <InputText label="Título" placeholder="Tipo de anúncio" name="primeiro teste" color="secondary"/>
              
              <div className="div--field">
                <InputText label="Ano" rows={1} placeholder="Digitar ano" name="age" color="secondary"/>
                <InputText label="Quilometragem" rows={1}placeholder="0" name="KM" color="secondary"/> 
                <InputText label="Preço" rows={1} placeholder="Digitar preço" name="price" color="secondary"/>              
              </div>
              
              <InputText label="Preço" placeholder="50.000,00" name="Price" color="secondary"/>
              
              <InputText multiline rows={3} label="Descrição" placeholder="Digitar descrição" name="primeiro teste" color="secondary"/>

              <div className="div--field">
                
                <ButtonUI text="Carro" color="primary" variant="contained" />
                <ButtonUI text="Moto" color="primary" variant="outlined" />
              
              </div>

              <InputText multiline label="Imagem da capa" placeholder="https://image.com" name="primeiro teste" color="secondary"/>

              <InputText multiline label="1ª Imagem da galeria" placeholder="https://image.com" name="primeiro teste" color="secondary"/>

              <InputText multiline label="2ª Imagem da galeria" placeholder="https://image.com" name="primeiro teste" color="secondary"/>

              <div className="div--field">
                
                <ButtonUI text="Cancelar" color="primary" variant="outlined" />
                <ButtonUI text="Criar anúncio" color="primary" variant="contained" />
              
              </div>

            </div>
          </FormContainer>
        </div>
      </section>
    </ContainerStyled>
  );
}

export { ModalAnnouncement };

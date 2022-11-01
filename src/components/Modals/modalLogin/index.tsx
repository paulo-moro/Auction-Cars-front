import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { createTheme } from "@material-ui/core/styles";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { InputText } from "../../input";
import { ButtonUI } from "../../buttonUI";

function ModalLogin({ handleHidden, statusModal }: Modalprops) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4529E6",
        contrastText: "#fff",
      },
      secondary: {
        main: "#000000",
        contrastText: "#ffffff",
      },
    },
  });

  const modal = statusModal
    ? "modal containerModal"
    : "modal containerModal hidden";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <ContainerStyled>
      <section className={modal}>
        <div className="modal">

          <div className="modalHeader">
            <h1>Login</h1>
            <button className="removedModal" onClick={() => handleHidden()}>x</button>
          </div>

          <FormContainer>
            <div className="modalBody">
            
              <InputText setFunction={setUsername} label="Usuário" placeholder="Usuário"  color="secondary"/>
              <InputText setFunction={setPassword} label="Senha" placeholder="Senha"  color="secondary"/>
            
              <a href="">Esqueci minha senha</a>
              <ButtonUI type="submit" text="Entrar" color="primary" variant="contained" />

              <label className="label--register">Ainda não possui conta?</label>
              <ButtonUI type="submit" text="Cadastrar" color="secondary" variant="outlined" />
              
            </div>
          
          </FormContainer>
        
        </div>
      
      </section>
    
    </ContainerStyled>
  );
}

export default ModalLogin;

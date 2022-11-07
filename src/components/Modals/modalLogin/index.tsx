import { Modalprops } from "../../../interface/modal";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { InputText } from "../../input";
import { ButtonUI } from "../../buttonUI";
import axios from "axios";

function ModalLogin({ handleHidden, statusModal }: Modalprops) {
  
  const modal = statusModal
    ? "modal containerModal"
    : "modal containerModal hidden";

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
    
      const loginUser = {email, password}
      
      axios.post("http://localhost:3000/login", loginUser)
      .then((response) => {
        sessionStorage.setItem("user", JSON.stringify(response.data.token));
      })
      .catch((error)=> console.log(error));
    }

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
              <ButtonUI 
              setBoolean={loginUser}  text="Entrar"
              type="submit" color="primary" variant="contained"/> 

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

import { Modalprops } from "../../../interface/modal";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { InputText } from "../../input";
import { ButtonUI } from "../../buttonUI";
import { useLogin } from "../../../providers/userLogin";
import { useModal } from "../../../providers/modal";

function ModalLogin() {
  
  const { 
    inOnLogin, 
    setInOnLogin, 
    showModalLogin, 
    hideModalLogin
 } = useModal();

  const modal = inOnLogin
    ? "modal containerModal"
    : "modal containerModal hidden";

    const { user, setUser} = useLogin();

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = () => {
      setUser({email, password});
    }

  return (
    <ContainerStyled>
      <section className={modal}>
        <div className="modal">

          <div className="modalHeader">
            <h1>Login</h1>
            <button className="removedModal" onClick={() => hideModalLogin()}>x</button>
          </div>

          <FormContainer>
            <div className="modalBody">
            
              <InputText setFunction={setUsername} label="Usuário" placeholder="Usuário"  color="secondary"/>
              <InputText setFunction={setPassword} label="Senha" placeholder="Senha"  color="secondary"/>
            
              <a href=" ">Esqueci minha senha</a>
              <ButtonUI 
              setBoolean={loginFunction}  text="Entrar"
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

import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

function ModalRegister({ handleHidden, statusModal }: Modalprops) {
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
  
  const [userRegister, setUserRegister] = useState({});

  const modal = statusModal
    ? "modal containerModal"
    : "modal containerModal hidden";

  return (
    <ContainerStyled>
      <section className={modal}>
        <div className="modal">
          <div className="modalHeader">
            <h1>Cadastro</h1>
            <button className="removedModal" onClick={() => handleHidden()}>x</button>
          </div>

          <FormContainer>
            <div className="modalBody">
            
              <label>Nome</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, username: e.target.value})} placeholder="Ex: Samuel Leoão" name="username" required color="secondary"
              />

              <label>Email</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, password: e.target.value})} name="password" placeholder="Ex: samuel@mail.com" required color="secondary"
              />
              
              <label>CPF</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, cpf: e.target.value})} name="cpf" placeholder="000.000.000-00" required color="secondary"
              />
              
              <label>Celular</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, phone: e.target.value})} name="phone" placeholder="(DDD)99999-9999" required color="secondary"
              />
              
              <label>Data de nascimento</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, birthDate: e.target.value})} name="birthDate" placeholder="00/00/00" required color="secondary"/>
              
              <label>Descrição</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, description: e.target.value})} name="description" placeholder="Digitar descrição" required color="secondary" />

              <label>Informações de endereço</label>
              
              <label>CEP</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister,  postalCode: e.target.value})} name="postalCode" placeholder="00000-000" required color="secondary"/>
              
              <div className="div--adress">
              
                <div className="div--field">
                  
                  <label>Estado</label>
                  <TextFieldElement onChange={(e) => setUserRegister({...userRegister,  country: e.target.value})} name="country" placeholder="Digitar estado" required color="secondary" />
                </div>
                  
                <div className="div--field">    
                
                  <label>Cidade</label>
                  <TextFieldElement onChange={(e) => setUserRegister({...userRegister,  city: e.target.value})} name="city" placeholder="Digitar cidade" required color="secondary" />
                </div>
                
              </div>
              
              <label>Rua</label>
              <TextFieldElement onChange={(e) => setUserRegister({...userRegister, street: e.target.value})} name="street" placeholder="Digitar rua" required color="secondary"/>
              
              
              <div className="div--adress">
              
                <div className="div--field">
                  <label>Número</label>
                  <TextFieldElement onChange={(e) => setUserRegister({...userRegister,  number: Number(e.target.value)})} name="number" placeholder="ex: apart 307" required color="secondary" />
                </div>
                  
                <div className="div--field">    
                  <label>Complemento</label>
                  <TextFieldElement onChange={(e) => setUserRegister({...userRegister,  adjunct: Number(e.target.value)})} name="adjunct" placeholder="Digitar complemento" required color="secondary" />
                </div>
                
              </div>


              
              <div className="div--adress">
              <ThemeProvider theme={theme}>
                <Button color="primary" variant="contained" type="submit">
                Comprador
                </Button>
              </ThemeProvider>
            
            
              <ThemeProvider theme={theme}>
                <Button color="secondary" variant="outlined">
                Anunciante
                </Button>
              </ThemeProvider>
              </div>

              <label>Senha</label>
              <TextFieldElement 
                onChange={(e) => setUserRegister({...userRegister,  password: e.target.value})} 
                name="password"
                type="password"
                label="Senha"
                required
                color="secondary"
              />
            
              <label>Confirmar senha</label>
              
              <TextField 
                onChange={(e) => setUserRegister({...userRegister,  passwordConfirm: e.target.value})} 
                name="password"
                type="password"
                label="Confirmar senha"
                required
                color="secondary"
              />

              <ThemeProvider theme={theme}>
                <Button onClick={()=> console.log(userRegister)} color="primary" variant="contained" type="submit">
                  Finalizar Cadastro
                </Button>
              </ThemeProvider>

            </div>
          </FormContainer>
        </div>
      </section>
    </ContainerStyled>
  );
}

export default ModalRegister;

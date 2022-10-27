import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { InputText } from "../../input";

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
  console.log(userRegister)

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

            <InputText label="Nome" placeholder="Ex: Samuel Leoão" required color="secondary"/>
              
            <InputText label="Email" required placeholder="Ex: samuel@mail.com" color="secondary"/>

            <InputText label="CPF" placeholder="000.000.000-00" required color="secondary"/>

            <InputText label="Celular" placeholder="(DDD)99999-9999" required color="secondary"/>

            <InputText label="Data de nascimento" placeholder="00/00/00" required color="secondary"/>

            <InputText label="Descrição" placeholder="Digitar descrição" required color="secondary"/>


              <label>Informações de endereço</label>


              <InputText label="CEP" placeholder="00000-000" required color="secondary"/>

              <div className="div--adress">
              
                <div className="div--field">


                  <InputText label="Estado" placeholder="Digitar estado" required color="secondary" />

                </div>
                  
                <div className="div--field">    
                
                  <InputText label="Cidade" placeholder="Digitar cidade" required color="secondary" />

                </div>
                
              </div>
              
              <InputText label="Rua" placeholder="Digitar rua" required color="secondary"/>
              
              <div className="div--adress">
              
                <div className="div--field">

                  <InputText label="Número" placeholder="ex: apart 307" required color="secondary"/>

                </div>
                  
                <div className="div--field">    

                  <InputText label="Complemento" placeholder="Digitar complemento" required color="secondary"/>

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
              
              <InputText label="Senha" placeholder="Senha" required color="secondary" type="password"/>

              <InputText label="Confirmar senha" placeholder="Confirmar senha" required color="secondary" type="password"/>

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

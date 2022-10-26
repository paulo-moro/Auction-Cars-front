import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { useState } from "react";
import { Button, ThemeProvider } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";

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
              <label>Usuário</label>
              <TextFieldElement
                name="username"
                label="Usuário"
                required
                color="secondary"
              />

              <label>Senha</label>
              <TextFieldElement
                name="password"
                label="Senha"
                required
                color="secondary"
              />

              <a href="">Esqueci minha senha</a>
              <ThemeProvider theme={theme}>
                <Button color="primary" variant="contained" type="submit">
                  Entrar
                </Button>
              </ThemeProvider>

              <label className="label--register">Ainda não possui conta?</label>
              
              <ThemeProvider theme={theme}>
                <Button color="secondary" variant="outlined"> Cadastrar </Button>
              </ThemeProvider>
              
            </div>
          
          </FormContainer>
        
        </div>
      
      </section>
    
    </ContainerStyled>
  );
}

export default ModalLogin;

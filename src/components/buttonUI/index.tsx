import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@material-ui/core";
import { Button } from "@mui/material";
// import ButtonStyled from "./styled";

interface ButtonProps{
    text?: string;
    name?: string;
    color?: any;
    variant?: any;
    size?: any;
}

const ButtonUI = ({text, name, color, variant, size}: ButtonProps) => {

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

    return(
        <ThemeProvider theme={theme}>

            <Button name={name} color={color} variant={variant} > {text}  </Button>
            
        </ThemeProvider>
    )
}

export { ButtonUI };


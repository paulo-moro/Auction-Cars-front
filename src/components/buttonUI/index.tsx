import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@material-ui/core";
import { Button } from "@mui/material";

interface ButtonProps{
    text?: string;
    name?: string;
    color?: any;
    variant?: any;
    size?: any;
    type: any;
    setBoolean?: any;
}

const ButtonUI = ({text, name, color, variant, size, type, setBoolean}: ButtonProps) => {

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

            <Button onClick={() => setBoolean()} type={type} name={name} color={color} variant={variant} > {text}  </Button>
            
        </ThemeProvider>
    )
}

export { ButtonUI };


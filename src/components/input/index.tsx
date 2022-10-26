import { createTheme, TextField } from "@mui/material";
import { InputStyled } from "./style"

interface IPlaceholder {
    label?: string;
    placeholder?: string;
    name: string;
    color: any;
    rows?: number;
    maxRows?: number;
    multiline?: boolean;
    variant?: any;
}

const InputText = ({label, placeholder, name, color, rows, maxRows, multiline, variant}: IPlaceholder) => {
    
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
      
    
    
    return (
        <InputStyled>
            {label && <label>{label}</label>}
            <TextField rows={rows} name={name} placeholder={placeholder} required color={color} maxRows={maxRows} variant={variant} multiline={multiline} />
        
        </InputStyled>
    )
    
    
    // return (
    //     <InputStyled>
        
    //         <label>{label}</label>
    //         <input placeholder={placeholder}/>
        
    //     </InputStyled>
    // )

}

export { InputText }

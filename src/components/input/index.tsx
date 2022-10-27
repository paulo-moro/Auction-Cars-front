import { createTheme, TextField } from "@mui/material";
import { InputStyled } from "./style";

interface IPlaceholder {
  label?: string;
  placeholder?: string;
  color: any;
  rows?: number;
  maxRows?: number;
  multiline?: boolean;
  variant?: any;
  required?: boolean;
  type?: string;
  setFunction?: any;

}

const InputText = ({
  label,
  placeholder,
  color,
  rows,
  maxRows,
  multiline,
  variant,
  required,
  type,
  setFunction
}: IPlaceholder) => {
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
      <TextField
        rows={rows}
        placeholder={placeholder}
        required={required}
        color={color}
        maxRows={maxRows}
        variant={variant}
        multiline={multiline}
        type={type}
        onChange={(e) => setFunction(e.target.value)}

      />
    </InputStyled>
  );
};

export { InputText };

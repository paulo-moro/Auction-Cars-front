import { createTheme, TextField } from "@mui/material";
import { IPlaceholder } from "../../interface/propsComponents";
import { InputStyled } from "./style";

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
  disabled,
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
        disabled={disabled}
        onChange={(e) => setFunction(e.target.value)}

      />
    </InputStyled>
  );
};

export { InputText };

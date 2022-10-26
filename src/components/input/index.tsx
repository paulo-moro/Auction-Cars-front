import { InputStyled } from "./style"

interface IPlaceholder {
    label?: string;
    placeholder: string;
    
}

const Input = ({label, placeholder}: IPlaceholder) => {
    return (
        <InputStyled>
             <label>{label}</label>
            <input placeholder={placeholder}/>
        </InputStyled>
    )

}

export { Input }

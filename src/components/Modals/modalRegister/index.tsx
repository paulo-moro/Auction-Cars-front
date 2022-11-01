import { Modalprops } from "../../../interface/index";
import { ContainerStyled } from "./style";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { FormContainer } from "react-hook-form-mui";
import { InputText } from "../../input";
import { ButtonUI } from "../../buttonUI";
import UserProvider from "../../../providers/user";
import axios from "axios";

// interface CreateUserProvider{
//   user: any;
// }

function ModalRegister({ handleHidden, statusModal }: Modalprops) {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [celphone, setCellphone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [description, setDescription] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [numberAdress, setNumberAdress] = useState('');
  const [complement, setComplement] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const { userCreate } = useContext(UserProvider);
  
  const [userBuyer, setUserBuyer] = useState(true);
  const [userAnnunciate, setUserAnnunciate] = useState(false);
  
  const createUser = () => {
    
    const newUser = {name, email, celphone, password, 
      // confirmPassword, cpf, birthDate, description, postalCode, country, city, street, numberAdress, complement, 
    }
    console.log(newUser);
    
    axios.post("http://localhost:3000/users/register", newUser)
    .then((response) => console.log(response.data))
    .catch((error)=> console.log(error));
  }
  

  const isBuyer = () => {
    return userBuyer ? setUserBuyer(false) : setUserBuyer(true);
  }

  const isAnnunciate = () => {
    return userAnnunciate ? setUserAnnunciate(false) : setUserAnnunciate(true);
  }
  
  const modal = statusModal ? "modal containerModal" : "modal containerModal hidden";
  
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

            <InputText setFunction={setName} label="Nome" placeholder="Ex: Samuel Leoão" required color="secondary"/>
              
            <InputText setFunction={setEmail} label="Email" required placeholder="Ex: samuel@mail.com" color="secondary"/>

            <InputText setFunction={setCpf} label="CPF" placeholder="000.000.000-00" required color="secondary"/>

            <InputText setFunction={setCellphone} label="Celular" placeholder="(DDD)99999-9999" required color="secondary"/>

            <InputText setFunction={setBirthDate} label="Data de nascimento" placeholder="00/00/00" required color="secondary"/>

            <InputText setFunction={setDescription} label="Descrição" placeholder="Digitar descrição" required color="secondary"/>

              <label>Informações de endereço</label>

              <InputText setFunction={setPostalCode} label="CEP" placeholder="00000-000" required color="secondary"/>

              <div className="div--adress">
              
                <div className="div--field">


                  <InputText setFunction={setCountry} label="Estado" placeholder="Digitar estado" required color="secondary" />

                </div>
                  
                <div className="div--field">    
                
                  <InputText setFunction={setCity} label="Cidade" placeholder="Digitar cidade" required color="secondary" />

                </div>
                
              </div>
              
              <InputText setFunction={setStreet} label="Rua" placeholder="Digitar rua" required color="secondary"/>
              
              <div className="div--adress">
              
                <div className="div--field">

                  <InputText setFunction={setNumberAdress} label="Número" placeholder="ex: apart 307" required color="secondary"/>

                </div>
                  
                <div className="div--field">    

                  <InputText setFunction={setComplement} label="Complemento" placeholder="Digitar complemento" required color="secondary"/>

                </div>
                
              </div>
              
              <div className="div--adress">

                <ButtonUI setBoolean={isBuyer} type="submit" text="Comprador" color="primary" variant={userBuyer ? "contained" : "outlined"} />

                <ButtonUI setBoolean={isAnnunciate} type="submit" text="Anunciante" color="primary" variant={userAnnunciate ? "contained" : "outlined"} />

              </div>
              
              <InputText setFunction={setPassword} label="Senha" placeholder="Senha" required color="secondary" type="password"/>

              <InputText setFunction={setConfirmPassword} label="Confirmar senha" placeholder="Confirmar senha" required color="secondary" type="password"/>

              <Button onClick={()=> {
                createUser()
                }} color="primary" variant="contained" type="submit">
                Finalizar Cadastro
              </Button>

        
            </div>
          </FormContainer>
        </div>
      </section>
    </ContainerStyled>
  );
}

export default ModalRegister;

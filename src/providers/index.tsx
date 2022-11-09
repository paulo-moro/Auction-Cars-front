import { RegisterUserProvider } from "./user";
import { NewVehicleProvider } from "./newVehicle";
import { ListVehicleProvider } from "./listAllVehicles";
import { LoginUserProvider } from "./userLogin";
import { ModalUserProvider } from "./modal";

const AppProvider = ({ children }: any) => {
  return (
    <RegisterUserProvider>
      <LoginUserProvider>
         <ModalUserProvider> 
          <NewVehicleProvider>
            <ListVehicleProvider>{children}</ListVehicleProvider>
          </NewVehicleProvider>
         </ModalUserProvider> 
      </LoginUserProvider>
    </RegisterUserProvider>
  );
};

export default AppProvider;

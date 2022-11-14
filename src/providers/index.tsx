import { UserProvider } from "./user";
import { NewVehicleProvider } from "./newVehicle";
import { ListVehicleProvider } from "./listAllVehicles";
import { LoginUserProvider } from "./userLogin";
import { ModalUserProvider } from "./modal";

const AppProvider = ({ children }: any) => {
  return (
    
    <ModalUserProvider>
      <UserProvider>
        <LoginUserProvider>
          <NewVehicleProvider>
            <ListVehicleProvider>{children}</ListVehicleProvider>
          </NewVehicleProvider>
        </LoginUserProvider>
      </UserProvider>
    </ModalUserProvider>
  );
};

export default AppProvider;

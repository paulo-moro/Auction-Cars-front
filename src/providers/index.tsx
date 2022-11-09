import { RegisterUserProvider } from "./user";
import { NewVehicleProvider } from "./newVehicle";
import { ListVehicleProvider } from "./listAllVehicles";
import { LoginUserProvider } from "./userLogin";
import { ModalUserProvider } from "./modal";

const AppProvider = ({ children }: any) => {
  return (
    <ModalUserProvider>
      <RegisterUserProvider>
        <LoginUserProvider>
          <NewVehicleProvider>
            <ListVehicleProvider>{children}</ListVehicleProvider>
          </NewVehicleProvider>
        </LoginUserProvider>
      </RegisterUserProvider>
    </ModalUserProvider>
  );
};

export default AppProvider;

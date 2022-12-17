import { UserProvider } from "./user";
import { VehicleProvider } from "./vehicles";
import { LoginUserProvider } from "./userLogin";
import { ModalUserProvider } from "./modal";

const AppProvider = ({ children }: any) => {
  return (
    
    <ModalUserProvider>
      <UserProvider>
        <LoginUserProvider>
            <VehicleProvider>{children}</VehicleProvider>
        </LoginUserProvider>
      </UserProvider>
    </ModalUserProvider>
  );
};

export default AppProvider;

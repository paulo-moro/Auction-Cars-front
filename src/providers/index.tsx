import { UserProvider } from "./user";
// import { NewVehicleProvider } from "./newVehicle";
import { VehicleProvider } from "./vehicles";
import { LoginUserProvider } from "./userLogin";
import { ModalUserProvider } from "./modal";

const AppProvider = ({ children }: any) => {
  return (
    
    <ModalUserProvider>
      <UserProvider>
        <LoginUserProvider>
          {/* <NewVehicleProvider> */}
            <VehicleProvider>{children}</VehicleProvider>
          {/* </NewVehicleProvider> */}
        </LoginUserProvider>
      </UserProvider>
    </ModalUserProvider>
  );
};

export default AppProvider;

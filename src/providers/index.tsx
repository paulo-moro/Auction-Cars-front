import { RegisterUserProvider } from "./user";
import { NewVehicleProvider } from "./newVehicle";
import { ListVehicleProvider } from "./listAllVehicles";

const AppProvider = ({ children }: any) => {
  return (
    <RegisterUserProvider>
      <NewVehicleProvider>
        <ListVehicleProvider>
          {children}
        </ListVehicleProvider>
      </NewVehicleProvider>
    </RegisterUserProvider>
  );
};

export default AppProvider;

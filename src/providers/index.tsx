import UserProvider from "./user";

const AppProvider = ({children}: any) => {

    return <UserProvider>{children}</UserProvider>

}

export default AppProvider;

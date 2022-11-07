// import { useContext, createContext, ReactNode, useEffect, useState } from "react";
// import axios from "axios";

// export interface ILoginState {
//     userLogin: Object;
//     setUserLogin: (data: Object) => void;
// }

// export const LoginUserContext = createContext({} as ILoginState);

// interface LoginUserProviderProps {
//     children: ReactNode;
// }

// export const LoginUserProvider = ({ children }: LoginUserProviderProps) => {

//     const [userLogin, setUserLogin] = useState({});

//     const loginUser = () => {
//         axios
//             .post("http://localhost:3000/login", userLogin)
//             .then((response) => { console.log(response.data) })
//             .catch(error => console.log(error));
//     };

//     useEffect(() => {
//         loginUser()
//     }, [userLogin]);

//     return (
//         <LoginUserContext.Provider value={{userLogin, setUserLogin }}>
//             {children}
//         </LoginUserContext.Provider>

//     )

// }
export{}
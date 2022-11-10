// import { useContext, createContext, useEffect, useState } from 'react';
// import { UserProviderProps } from "../../interface/user";
// import { ITokenState } from '../../interface/auth/index';


// export const UserTokenContext = createContext({} as ITokenState);

// export const UserTokenProvider = ({children}: UserProviderProps) => {

//     const [userToken, setUserToken] = useState({});

//     return (
//         <UserTokenContext.Provider value={{ userToken }}>
//             {children}
//         </UserTokenContext.Provider>
//     )
// }

// export const useTokenUser = () => useContext(UserTokenContext);


//   if (sessionStorage.getItem("user")) {
//     setToken(JSON.parse(sessionStorage.getItem("user") || ""));
//   }
export {}
import { createContext, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
     const [isAuth, setIsAuth] = useState(
          false || sessionStorage.getItem("isAuth")
     );
     const [token, setToken] = useState("");
     console.log("isAuth in auth context", isAuth);
     const toggleAuth = () => {
          setIsAuth(isAuth === true ? false : null);
     };

     return (
          <AuthContext.Provider
               value={{
                    isAuth,
                    setIsAuth,
                    toggleAuth,
                    token,
                    setToken,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
}

export default AuthContextProvider;
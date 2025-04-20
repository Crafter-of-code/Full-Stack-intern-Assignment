import React from "react";
import LoginApi from "./LoginApi";
type loginContexttype = {
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  userErrorPath: string;
  userError: string;
  login_button: any;
};
const loginContext = React.createContext<loginContexttype>({
  setUserId: () => {},
  setUserPassword: () => {},
  login_button: () => {},
  userError: "",
  userErrorPath: "",
});
type prpos = {
  children: React.ReactNode;
};

export default function LoginContextProvider({ children }: prpos) {
  const [userId, setUserId] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userErrorPath, setUserErrorPath] = React.useState("");
  const [userError, setUserError] = React.useState("");
  async function login_button() {
    const data: { userId: string; userPassword: string } = {
      userId,
      userPassword,
    };
    try {
      const data_from_login = await LoginApi(data);
      if (data_from_login) {
        setUserErrorPath(data_from_login.path);
        setUserError(data_from_login.message);
        setTimeout(() => {
          setUserError("");
        }, 4000);
        console.log(data_from_login);
      }
    } catch (erro) {
      console.log(erro);
    }
  }
  return (
    <loginContext.Provider
      value={{
        setUserId,
        setUserPassword,
        login_button,
        userError,
        userErrorPath,
      }}
    >
      {children}
    </loginContext.Provider>
  );
}
export { loginContext };

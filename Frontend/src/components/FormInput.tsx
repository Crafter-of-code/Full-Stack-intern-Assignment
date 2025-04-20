import React from "react";
import styles from "./styles/FormInput.module.css";
import { loginContext } from "../store/LoginContextProvider";
export default function FormInput(): React.JSX.Element {
  const { setUserId, setUserPassword, userError, userErrorPath } =
    React.useContext(loginContext);
  return (
    <>
      <form className={styles.login_form}>
        <input
          type="text"
          placeholder="UID"
          onChange={(e) => setUserId(e.target.value)}
        />
        {userErrorPath == "userId" ? <p>{userError}</p> : ""}
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        {userErrorPath == "userPassword" ? <p>{userError} </p> : ""}
      </form>
    </>
  );
}

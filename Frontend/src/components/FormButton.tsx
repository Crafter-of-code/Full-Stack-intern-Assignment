import React from "react";
import styles from "./styles/FormButton.module.css";
import { loginContext } from "../store/LoginContextProvider";
export default function FormButton(props: {
  button_heading: string;
}): React.JSX.Element {
  const { login_button } = React.useContext(loginContext);
  return (
    <>
      <button
        className={styles.formButton}
        onClick={() => {
          login_button();
        }}
      >
        {props.button_heading}
      </button>
    </>
  );
}

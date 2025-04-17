import React from "react";
import styles from "./styles/FormInput.module.css";
export default function FormInput(): React.JSX.Element {
  return (
    <>
      <form className={styles.login_form}>
        <input type="text" placeholder="UID" />
        <input type="text" placeholder="Password" />
      </form>
    </>
  );
}

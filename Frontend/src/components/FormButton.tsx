import React from "react";
import styles from "./styles/FormButton.module.css";
export default function FormButton(props: {
  button_heading: string;
}): React.JSX.Element {
  return (
    <>
      <button className={styles.formButton}>{props.button_heading}</button>
    </>
  );
}

import React from "react";
import styles from "./styles/LoginCard.module.css";
type props = {
  children: React.ReactNode;
};
export default function LoginCard({ children }: props): React.JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <h1>Welcome back!</h1>
        {children}
      </div>
    </div>
  );
}

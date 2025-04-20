import LoginCard from "./components/LoginCard";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";
import "./App.css";
import LoginContextProvider from "./store/LoginContextProvider";
function App() {
  return (
    <>
      <LoginContextProvider>
        <LoginCard>
          <FormInput />
          <FormButton button_heading="Login" />
        </LoginCard>
      </LoginContextProvider>
    </>
  );
}

export default App;

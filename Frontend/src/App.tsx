import LoginCard from "./components/LoginCard";
import FormInput from "./components/FormInput";
import FormButton from "./components/FormButton";
import "./App.css";
function App() {
  return (
    <>
      <LoginCard>
        <FormInput />
        <FormButton button_heading="Login" />
      </LoginCard>
    </>
  );
}

export default App;

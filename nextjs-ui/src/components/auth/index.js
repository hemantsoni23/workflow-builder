import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Index = ({ close }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <div>

      {isLogin ? (
        <Login switchToRegister={() => setIsLogin(false)} close={close} />
      ) : (
        <Register switchToLogin={() => setIsLogin(true)} close={close} />
      )}
    </div>
  );
};

export default Index;

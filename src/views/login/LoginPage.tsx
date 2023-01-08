import { Button } from "@mui/material";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "utils/routes";
import "./LoginPage.scss";

interface ILoginPageProps {}

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(routes.DASHBOARD);
    localStorage.setItem("LOGIN_ALLOWED", "true");
  };

  return (
    <div className="login-container">
      <div className="action-button-container">
        <Button variant="text" className="action-button" onClick={handleSubmit}>
          LOGIN
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

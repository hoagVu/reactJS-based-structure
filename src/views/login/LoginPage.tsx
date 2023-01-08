import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.scss";

interface ILoginPageProps {}

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const auth = useAuth();

  const from = location?.state?.from?.pathname
    ? location?.state?.from?.pathname
    : "/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <p>
          Username: <input name="username" type="text" />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

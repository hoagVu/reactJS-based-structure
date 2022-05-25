import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

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

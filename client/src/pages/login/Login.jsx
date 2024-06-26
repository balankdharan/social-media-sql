import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";

// {
//   "username":"test",
//   "password":"test123"
// }
const Login = () => {
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
            veritatis repellendus, laborum deserunt repellat exercitationem
            illo. Nesciunt qui modi eum itaque totam! Adipisci cumque illo porro
            aut odit officiis.
          </p>
          <span>Don't have an account yet ?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              name="username"
              id=""
              placeholder="User Name"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              onChange={handleChange}
            />
            {err && err}

            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

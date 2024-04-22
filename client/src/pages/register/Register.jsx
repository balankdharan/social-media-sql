import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
            veritatis repellendus, laborum deserunt repellat exercitationem
            illo. Nesciunt qui modi eum itaque totam! Adipisci cumque illo porro
            aut odit officiis.
          </p>
          <span>Do you have an account? </span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              name="username"
              id=""
              placeholder="User Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
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
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

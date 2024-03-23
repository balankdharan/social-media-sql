import "./login.scss";

const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="User Name" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

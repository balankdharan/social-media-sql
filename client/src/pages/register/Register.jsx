import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque
            veritatis repellendus, laborum deserunt repellat exercitationem
            illo. Nesciunt qui modi eum itaque totam! Adipisci cumque illo porro
            aut odit officiis.
          </p>
          <span>Do you have an account? </span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="User Name" />
            <input type="text" name="" id="" placeholder="Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

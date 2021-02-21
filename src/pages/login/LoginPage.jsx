import "./LoginPage.css";

const LoginPage = () => {
  return (
    <form className="form-signin">
      <img
        alt=""
        className="mb-4"
        height="72"
        src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
        width="72"
      />

      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label className="sr-only" htmlFor="inputUsername">
        Username
      </label>
      <input
        className="form-control"
        id="inputUsername"
        placeholder="Username"
        type="text"
      />
      <label className="sr-only" htmlFor="inputPassword">
        Password
      </label>
      <input
        className="form-control"
        id="inputPassword"
        placeholder="Password"
        type="password"
      />

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>

      <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
    </form>
  );
};

export default LoginPage;

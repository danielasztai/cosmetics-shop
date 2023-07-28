const Login = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
        </div>
      </form>
    </div>
  );
};

export default Login;

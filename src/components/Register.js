import { h, render } from "preact";
/** @jsx h */
const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Works!");
  }

  return (
    <div id="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input id="username" type="text" />
        </label>
        <label>
          Email:
          <input id="email" type="text" />
        </label>
        <label>
          Password:
          <input id="password" type="password" />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;

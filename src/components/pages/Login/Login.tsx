import { useState } from "react";
import "../../style/style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(email) === true) {
      console.log("Email je validan");
    } else {
      console.log("Email nije validan");
    }
    console.log(email, password);
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Log In</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type={"password"}
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <button id="signbtn" onClick={handleSubmit}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;

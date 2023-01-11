import "./Login.scss";
import Input from "../../components/Input/input";
import logo from "../../assets/images/logo.png";

import loginIllustration from "../../assets/images/loginIllustration.png";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="images-cont">
          <div className="logo">
            <img src={logo} alt="logo" width={170} />
          </div>
          <div className="illustration">
            <img src={loginIllustration} alt="illustration" width={550} />
          </div>
        </div>

        <div className="form">
          <Input />{" "}
        </div>
      </div>
    </>
  );
};

export default Login;

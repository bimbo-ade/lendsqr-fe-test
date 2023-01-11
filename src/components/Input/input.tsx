import "./Input.scss";

const Input = () => {
  return (
    <>
      <div className="container">
        <h2>Welcome!</h2>
        <p>Enter Details to Login.</p>

        <div className="form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <div className="forgot-password">
            <h6>FORGOT PASSWORD</h6>
          </div>
          <button>LOG IN</button>
        </div>
      </div>{" "}
    </>
  );
};

export default Input;

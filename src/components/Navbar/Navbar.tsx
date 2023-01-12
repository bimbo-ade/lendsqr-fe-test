import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="nav">
      {" "}
      <div className=" search-cont">
        <img src={logo} alt="logo" width={140} />
        <div className="search">
          <input type="text" placeholder="search" className="input" />
          <div className="icon">icon</div>
        </div>
      </div>
      <div className="user-info">
        <p>Docs</p>
        icon
        <img src="" alt="" />
        <span>Adedeji</span>
        icon
      </div>
    </div>
  );
};

export default Navbar;

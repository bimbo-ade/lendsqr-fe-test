import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

import search from "../../assets/images/search.png";

import dropdown from "../../assets/images/dropdown.png";

import bell from "../../assets/images/bell.png";

import avatar from "../../assets/images/avatar.png";
const Navbar = () => {
  return (
    <div className="nav">
      {" "}
      <div className=" search-cont">
        <img src={logo} alt="logo" width={140} />
        <div className="search">
          <input
            type="text"
            placeholder="search for anything"
            className="input"
          />
          <div className="icon">
            <img src={search} alt="" width={20} />
          </div>
        </div>
      </div>
      <div className="user-info">
        <p>Docs</p>
        <img src={bell} alt="" width={20} />
        <img src={avatar} alt="" width={20} />
        <span>Adedeji</span>
        <img src={dropdown} alt="" width={20} />
      </div>
    </div>
  );
};

export default Navbar;

import "./NavBar.css";
import "../../App.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import { NavLink } from 'react-router-dom'
function NavBar() {
  const menuBtn = useRef(null);
  const closeBtn = useRef(null);
  const menu = useRef(null);

  function Close() {
    menu.current.classList.add("close");
  }
  function Open() {
    menu.current.classList.remove("close");
  }

  return (
    <div className="my-container b">
      <div className="navbar">
        <img src="/images/Logo.png" alt="flora-logo" />
        <ul className="main-ul">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>New Property</li>
          <li>Contact</li>
        </ul>
        <button className="main-login">Log in</button>
        <button className="menuBtn" ref={menuBtn} onClick={Open}>
          {" "}
          <IoMenu className="icon-menu" />{" "}
        </button>

        <div className="menu-nav my-container close" ref={menu}>
          <div className="flex justify-between items-center">
            <img src="/images/Logo.png" alt="flora-logo" />
            <button className="btn-close" ref={closeBtn} onClick={Close}>
              <IoMdClose />
            </button>
          </div>
          <ul>
            <li className="enter-li">Home</li>
            <li>About</li>
            <li>Service</li>
            <li>New Property</li>
            <li>Contact</li>
          </ul>
          <button className="login">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

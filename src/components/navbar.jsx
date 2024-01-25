import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from "react-scroll";

function Navbar() {
  let [open, setOpen] = useState(false);
  function clickhandle(event) {
    setOpen(!open);
    event.preventDefault();
  }
  return (
    <>
      <nav className="p-4 px-8 text-white flex justify-between items-center bg-transparent  ">
        <div className="flex items-center">
          <GiWeightLiftingUp className="text-3xl" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-white text-2xl font-bold">
            GYM
          </span>
        </div>
        <div className="md:hidden text-xl">
          <button onClick={clickhandle}>
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>
        <div
          className={`bg-red-600 rounded-xl md:bg-transparent absolute right-8 top-10 md:sticky p-4 px-8  md:p-0  ${
            open ? "block" : "hidden"
          } md:block`}
        >
          <ul className=" list-none md:flex-row  flex flex-col gap-4 md:gap-8 text-md items-center ">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                activeClass="active"
                offset={-100}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} offset={-100}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" spy={true} smooth={true} offset={-100}>
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} offset={-100}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

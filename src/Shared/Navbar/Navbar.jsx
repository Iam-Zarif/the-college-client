
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import pic from "../../assets/school.png"
import "./Navbar.css"
import Auth from "../../Hooks/Auth";
const Navbar = () => {
  const { user, logOut } = Auth();
  const navItems = (
    <>
      <li>
        <Link className=" hover:shadow-lg hover:shadow-black hover:text-white">
          Home
        </Link>
      </li>
      <li>
        <a className=" hover:shadow-lg hover:shadow-black hover:text-white">
          Colleges
        </a>
      </li>
      <li>
        <a className=" hover:shadow-lg hover:shadow-black hover:text-white">
          Admission
        </a>
      </li>
      <li>
        <a className=" hover:shadow-lg hover:shadow-black hover:text-white">
          My College
        </a>
      </li>
    </>
  );
    return (
      <Container>
        <div className="mt-5 basic-font">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu font-semibold  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>
              <Link
                to="/"
                className="hover:shadow-sm rounded-full p-2 hover:shadow-black flex text-white items-center gap-5 text-3xl lg:text-6xl "
              >
                <img src={pic} alt="" />
                <p className="logo-name">
                  <span className="text-blue-400">Degree</span> Camp
                </p>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="text-lg flex gap-6 text-white menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>
            <div className="navbar-end flex flex-col lg:flex-row gap-4">
              <div className="">
                {user ? (
                  <div className="tooltip" data-tip={user.displayName}>
                    <img
                      src={user.photoURL}
                      alt="image"
                      className=" w-10 lg:w-14 rounded-full"
                    />
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="border text-lg font-bold hover:shadow-xl hover:shadow-black hover:border-blue-500 px-4 py-2 rounded-xl"
                    >
                      Log in
                    </Link>
                  </div>
                )}
              </div>
              <div>
                {user ? (
                  <div>
                    <button
                      className="border text-lg font-bold hover:shadow-xl hover:shadow-black hover:border-blue-500 px-4 py-2 rounded-xl"
                      onClick={logOut}
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/register"
                      className="border text-lg font-bold hover:shadow-xl hover:shadow-black hover:border-blue-500 px-4 py-2 rounded-xl"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Navbar;
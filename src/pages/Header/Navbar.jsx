import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
    <li>
        <Link to="login" className=" bg-green-500 hover:bg-black">LogIn</Link>
      </li>
      <li className="px-2">
        <Link to="registration" className=" bg-lime-400 hover:bg-black">Registration</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-full max-auto px-10">
      <div className="max-w-screen-lg mx-auto navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gray-800">
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
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-gray-900">
            {navOption}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl ">
          Auth
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
     
    </div>
  );
};

export default NavBar;
import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../provider/AuthContext";
import "./component.css";
import { FaHome } from "react-icons/fa";
import { IoMdCompass } from "react-icons/io";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { RiUserSharedFill } from "react-icons/ri";
import { MdOutlinePersonPin } from "react-icons/md";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [themeMode, setThemeMode] = useState("light");
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setThemeMode(current === "myThemeDark" ? "dark" : "light");
  }, []);

  const handleToggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme =
      current === "myThemeLight" ? "myThemeDark" : "myThemeLight";

    document.documentElement.setAttribute("data-theme", newTheme);
    setThemeMode(newTheme === "myThemeDark" ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errMsg = error.massage;
        let timerInterval;
        Swal.fire({
          title: errMsg,
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            //closed
          }
        });
      });
  };
  return (
    <div className="text-primary-content">
      <div className="navbar flex-wrap lg:flex-nowrap gap-2 items-center justify-center md:justify-between bg-secondary shadow-sm">
        <div className="md:flex items-center justify-center hidden">
          <img src={logo} className="w-12 rounded-full " />

          <a className="font-bold text-xl hidden lg:inline">
            <span className="text-primary ml-2 ">Green</span>
            Circle
          </a>
        </div>
        <div className="flex md:gap-5 gap-2 nav-bar">
          <NavLink to={"/"}>
            <span className="hidden lg:block ">Home</span>
            <span className="block lg:hidden">
              <FaHome />
            </span>
          </NavLink>
          <NavLink to={"/explore"}>
            <span className="hidden lg:block ">Explore Gardeners</span>
            <span className="lg:hidden">
              <IoMdCompass />
            </span>
          </NavLink>
          <NavLink to={"/browse-tips"}>
            <span className="hidden lg:block ">Browse Tips</span>
            <span className="lg:hidden">
              <GiEarthAsiaOceania />
            </span>
          </NavLink>
          {user && (
            <>
              <NavLink to={"/share-tip"}>
                <span className="hidden lg:block ">Share a Garden Tip</span>
                <span className="lg:hidden">
                  <RiUserSharedFill />
                </span>
              </NavLink>
              <NavLink to={"/my-tips"}>
                <span className="hidden lg:block "> My Tips</span>
                <span className="lg:hidden">
                  <MdOutlinePersonPin />
                </span>
              </NavLink>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-black"
              checked={themeMode == "dark"}
              onChange={handleToggle}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar group relative"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                  <div className="absolute text-primary-content -bottom-[70px] left-1/2 transform -translate-x-1/2 bg-transparent  text-xs p-1  opacity-0 group-hover:opacity-100 transition-opacity">
                    {user?.displayName}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to={"/auth/register"}>
                <button className="btn btn-accent text-white">
                  Sign up
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

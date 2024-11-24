import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function NavigationBar() {

  const [toggleSearch, setToggleSearch] = useState(false)

  return (
        <div className="bg-transparent text-[white] flex items-center justify-between px-10 py-4 sm:px-2 sticky top-0 z-50">
    <div>
        <img
          className="w-full laptop:w-[160px] sm:w-[100px] "
          src={assets.desktopLogo}
          alt=""
        />
      </div>

      <div className="bg-black1 text-gray4 px-10 py-2 xl:p-3 xl:py-1 rounded-xl border-2 border-black4 flex gap-6 xl:gap-4 items-center justify-center lg:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 px-3  rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4 "
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movie&shows"
          className={({ isActive }) =>
            `py-2 px-3 rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4 "
            }`
          }
        >
          Movies & Shows
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `py-2 px-3 rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4 "
            }`
          }
        >
          Support
        </NavLink>
        <NavLink
          to="/upgradesubscription"
          className={({ isActive }) =>
            `py-2 px-3 rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4 "
            }`
          }
        >
          Subscriptions
        </NavLink>
      </div>

      <div className="flex items-center">
        <FaSearch onClick={() => toggleSearch ? setToggleSearch(false) :setToggleSearch(true) } className="inline w-12 z-10 relative sm:hidden" />
        <input type="text" className= {`rounded-2xl bg-black6 py-2 pl-12 sm:hidden text-white relative -left-12 z-0 ${toggleSearch ? 'hidden': ''}`} />
        <img className="w-7 sm:w-5 lg-max:hidden" src={assets.threeLine} alt="" />
      </div>
    </div>
  );
}

export default NavigationBar;

import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target[0].value)
    if (location.pathname === "/searchlist") {
      window.location.reload();
      navigate("/searchlist", { state: { search } })
    } else {
      navigate("/searchlist", { state: { search } });
      setSearch("")
    }
  }
  const changeSerch = (e) => setSearch(e.target.value)
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between px-8 py-4 sm-max:px-2 sticky top-0 z-[99999] transition-all duration-300 ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div>
        <img
          className="w-full laptop:w-[160px] sm-max:w-[100px]"
          src={assets.desktopLogo}
          alt="Logo"
        />
      </div>

      <div className="bg-black1 text-gray4 px-10 py-2 xl-max:p-3 xl-max:py-1 rounded-xl border-2 border-black4 flex gap-6 xl-max:gap-4 items-center justify-center lg-max:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 px-3 rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movie&shows"
          className={({ isActive }) =>
            `py-2 px-3 rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4"
            }`
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `py-2 px-3 rounded-lg text-center ${
              isActive ? "font-semibold bg-black3 text-white" : "text-gray4"
            }`
          }
        >
          Support
        </NavLink>
      </div>
      {/* Search box */}
      <div className="flex items-center ">
        <FaSearch
          className="inline w-12 z-10 relative sm-max:hidden"
        />
        <div>
          <form onSubmit={handleSubmit} className="flex items-center">

        <input
          type="text"
          value={search}
          onChange={changeSerch}
          className={'rounded-2xl bg-black6 py-2 pl-10 pr-11 sm-max:hidden text-white relative -left-12 z-0'}
        />
      
        <button 
        type="submit"
         className="relative -left-[85px] z-0 sm-max:hidden">
                    <img src={assets.rightbtn} alt="" />
        </button>
        
          </form>
        </div>
        <img
          className="w-7 sm-max:w-5 lg:hidden"
          src={assets.threeLine}
          alt="Menu Icon"
        />
      </div>
    </div>
  );
}

export default NavigationBar;

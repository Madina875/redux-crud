import { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="z-50  bg-black text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <p
          onClick={() => navigate("/")}
          className="text-2xl font-bold tracking-wide cursor-pointer hover:text-blue-300"
        >
          LOGOO
        </p>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              AddCar
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);

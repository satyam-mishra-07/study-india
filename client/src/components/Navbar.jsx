import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="fixed flex w-full px-11 py-4 justify-between items-center">
      <div className="logo">
        <h2 className="font-bold text-4xl text-[var(--primary-color)]">
          Study India
        </h2>
      </div>
      <div className="navItems">
        <ul className="flex items-center gap-6 text-lg font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/study">Practice</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li className="border-2 border-[#FBD601] rounded-full px-4">
                <NavLink to="/logout">Log Out</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="border-2 border-[#FBD601] rounded-full px-4">
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li className="border-2 border-[#FBD601] rounded-full px-4">
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

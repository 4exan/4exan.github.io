import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-mantle">
        <ul className="p-2">
          <li className="px-4 inline text-text text-xl font-semibold transition-all hover:text-green">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 inline text-text text-xl font-semibold transition-all hover:text-green">
            <Link to="/about-me">About me</Link>
          </li>
          <li className="px-4 inline text-text text-xl font-semibold transition-all hover:text-green">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

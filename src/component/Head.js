import React, { useState } from "react";

export default function Head() {
  const [btnName, setbtnName] = useState("Login");

  return (
    <nav className="p-10 bg-sky-200  font-bold sticky top-0 bg-opacity-75 font-comic">
      <div className="flex justify-between items-center">
        <a href="/" className="text-xl">Home</a>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <a aria-current="page" href="/about" className="text-lg">
                About
              </a>
            </li>
            <li>
              <a href="/error" className="text-lg">
                Error
              </a>
            </li>
          </ul>
          <button
            className="text-lg"
            onClick={() => {
              setbtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </nav>
  );
}

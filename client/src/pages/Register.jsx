import { useState } from "react";
import loginImage from "../assets/hero-img.jpg";

export default function Register() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full bg-zinc-100">
      <div className="h-full w-full py-20">
        <div className="inner w-full max-w-screen-lg mx-auto bg-white p-8 flex shadow-xl rounded-lg">
          <div className="image-holder w-1/2 overflow-hidden">
            <img src={loginImage} alt="" className="w-full" />
          </div>
          <form className="w-1/2 p-8">
            <h3 className="text-center text-lg font-semibold uppercase mb-8">
              Registration Form
            </h3>
            <div className="form-group flex">
              <input
                type="text"
                placeholder="First Name"
                className="form-input flex-1 mr-4"
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-input flex-1"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-input pr-10"
                  name="phoneNumber"
                  onChange={handleChange}
                />
                <i className="zmdi zmdi-account absolute inset-y-0 right-0 flex items-center px-2"></i>
              </div>
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Age"
                  className="form-input pr-10"
                  name="age"
                  onChange={handleChange}
                />
                <i className="zmdi zmdi-account absolute inset-y-0 right-0 flex items-center px-2"></i>
              </div>
            </div>

            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="form-input pr-10"
                name="email"
                onChange={handleChange}
              />
              <i className="zmdi zmdi-email absolute inset-y-0 right-0 flex items-center px-2"></i>
            </div>
            <div className="relative mt-4">
              <select
                name="studentClass"
                id=""
                className="form-select pr-10"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Class
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <i
                className="zmdi zmdi-caret-down absolute inset-y-0 right-0 flex items-center px-2"
                style={{ fontSize: "17px" }}
              ></i>
            </div>
            <div className="relative mt-4">
              <input
                type="password"
                placeholder="Password"
                className="form-input pr-10"
                name="password"
                onChange={handleChange}
              />
              <i className="zmdi zmdi-lock absolute inset-y-0 right-0 flex items-center px-2"></i>
            </div>
            <div className="relative mt-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input pr-10"
                name="confirmPassword"
                onChange={handleChange}
              />
              <i className="zmdi zmdi-lock absolute inset-y-0 right-0 flex items-center px-2"></i>
            </div>
            <button className="bg-gray-900 text-white w-full py-3 mt-6 rounded-md flex items-center justify-center transition duration-300 ease-in-out hover:transform hover:scale-105">
              Register
              <i className="zmdi zmdi-arrow-right ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

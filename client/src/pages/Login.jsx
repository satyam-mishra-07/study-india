import { useState } from "react";
import loginImage from "../assets/undraw_Login_re_4vu2.png";

export default function Login() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full min-h-screen bg-zinc-100">
      <div className="h-full w-full py-20">
        <div className="inner w-full max-w-screen-lg mx-auto bg-white p-8 flex shadow-xl rounded-lg">
          <div className="image-holder w-1/2 overflow-hidden">
            <img src={loginImage} alt="" className="w-full" />
          </div>
          <form className="w-1/2 p-8">
            <h3 className="text-center text-lg font-semibold uppercase mb-8">
              LogIn
            </h3>

            <div className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button className="bg-gray-900 text-white w-full py-3 mt-6 rounded-md flex items-center justify-center transition duration-300 ease-in-out hover:transform hover:scale-105">
              Login
              <i className="zmdi zmdi-arrow-right ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

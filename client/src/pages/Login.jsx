import { useState } from "react";
import loginImage from "../assets/undraw_Login_re_4vu2.png";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const URL = `http://localhost:3000/api/auth/login`;
  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // To prevent the page from refreshing when submitted
    console.log(login);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        storeTokenInLS(res_data.token); //If we dont do default export then we have to use { storeTokenInLS }
        toast.success("Login Successful");
        setLogin({
          email: "",
          password: "",
        });

        navigate("/");
      }else{
        toast.error(res_data.message);
      }
      console.log(response);
    } catch (error) {
      toast.error(`Internal Server Error`);
      console.log(`Register Error: ${error}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-zinc-100">
      <div className="h-full w-full py-20">
        <div className="inner w-full max-w-screen-lg mx-auto bg-white p-8 flex shadow-xl rounded-lg">
          <div className="image-holder w-1/2 overflow-hidden">
            <img src={loginImage} alt="" className="w-full" />
          </div>
          <form className="w-1/2 p-8" onSubmit={handleSubmit}>
            <h3 className="text-center text-lg font-semibold uppercase mb-8">
              LogIn
            </h3>

            <div className="flex flex-col gap-10">
              <input
                type="email"
                placeholder="Email"
                // value={login.email}
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                // value={login.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="bg-gray-900 text-white w-full py-3 mt-6 rounded-md flex items-center justify-center transition duration-300 ease-in-out hover:transform hover:scale-105">
              Login
              <i className="zmdi zmdi-arrow-right ml-2"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

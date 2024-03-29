import { useState } from "react";

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [studyData, setStudyData] = useState([]);
  const [user, setUser] = useState({});

  const storeTokenInLS = (token) => {
    setToken(token);
    return localStorage.setItem("token", token);
  };

  const isLoggedIn = !!token;

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const getStudyData = async () => {
    try {
      const url = "http://localhost:3000/api/data/study";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setStudyData(data.message);
      } else {
        console.log("Error: ", response.json());
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getUser = async () => {
    try {
      const url = "http://localhost:3000/api/auth/user";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.log("Error: ", response.json());
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <AuthProvider.Provider>
      value=
      {{
        token,
        storeTokenInLS,
        isLoggedIn,
        logout,
        getStudyData,
        studyData,
        getUser,
        user,
      }}
      {children}
    </AuthProvider.Provider>
  );
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth must be used within AuthProvider");
    }
    return authContextValue;
}

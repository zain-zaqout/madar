"use client";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const ContextAuth = createContext();

export const AuthContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);

  const Login = () => {
    setTimeout(() => {
      setCookie('isLoggedIn', "true", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
      });
      setIsLogin("true");
      toast.success("تم تسجيل الدخول بنجاح, أهلا بك في مدار!")
      window.location.href = "/";
    }, 1000);
  };

  useEffect(() => {
    const savedCookie = getCookie('isLoggedIn');
    if (savedCookie === "true") {
      setIsLogin("true");
    } else {
      setIsLogin("false"); 
    }
  }, []);

  const Logout = () => {
      
      deleteCookie("isLoggedIn")
      localStorage.clear()
    window.location.href = "/"
  }

  return (
    <ContextAuth.Provider value={{ isLogin, setIsLogin, Login, Logout }}>
      {children}
    </ContextAuth.Provider>
  );
};
export const useAuth = () => useContext(ContextAuth);
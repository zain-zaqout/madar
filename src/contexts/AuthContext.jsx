"use client";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const ContextAuth = createContext();

export const AuthContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(null);
  const [isAuthReady, setisAuthReady] = useState(false)
  const [Loading, setLoading] = useState(false)

  const Login = () => {
    setLoading(true)
    setTimeout(() => {
      setIsLogin("true");
      setisAuthReady(true)
      setCookie("isLoggedIn", "true", {
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
      })
      toast.success("تم تسجيل الدخول بنجاح, أهلا بك في مدار!");
      window.location.href = "/";
      setLoading(false)
    }, 2000);
  };

  useEffect(() => {
    const savedCookie = getCookie("isLoggedIn");
    if (savedCookie === "true") {
      setIsLogin("true");
    } else {
      setIsLogin("false");
    }
    setisAuthReady(true)
  }, []);

  const Logout = () => {
    deleteCookie("isLoggedIn");
    setisAuthReady(false)
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <ContextAuth.Provider
      value={{
        isLogin,
        setIsLogin,
        Login,
        Logout,
        Loading,
        isAuthReady
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
export const useAuth = () => useContext(ContextAuth);

"use client";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const Context = createContext();
export const ChangeData = ({ children }) => {
  const [showAction, setShowAction] = useState(false);
  const [editName, seteditName] = useState("Ahmed");
  const [editPhone, seteditPhone] = useState("0599999999");
  const [editMail, seteditMail] = useState("user@madar.com");
  const initialState = {
    userName: "Ahmed",
    phoneNumber: "0599999999",
    mail: "user@madar.com",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "USER_NAME":
        return { ...state, userName: action.val };
      case "PHONE_NUMBER":
        return { ...state, phoneNumber: action.val };
      case "MAIL":
        return { ...state, mail: action.val };
      default:
        return state;
    }
  };
  const [informition, dispatch] = useReducer(reducer, initialState);

  const changeData = () => {
    dispatch({ type: "USER_NAME", val: editName });
    dispatch({ type: "PHONE_NUMBER", val: editPhone });
    dispatch({ type: "MAIL", val: editMail });
  localStorage.setItem("name", editName)
    localStorage.setItem("phone", editPhone)
  localStorage.setItem("email", editMail)
    setShowAction(false);
  };
  
  useEffect(() => {
    const name = localStorage.getItem("name")
    const phone = localStorage.getItem("phone")
    const mail = localStorage.getItem("email")
    if (name) {
      
      dispatch({type: "USER_NAME", val: name})
      dispatch({type: "PHONE_NUMBER", val: phone})
      dispatch({ type: "MAIL", val: mail })
      seteditName(name)
      seteditPhone(phone)
      seteditMail(mail)
    }
  }, [])
  
        
  const cancelChange = () => {
    seteditName(informition.userName)
    seteditPhone(informition.phoneNumber)
    seteditMail(informition.mail)
    setShowAction(false)
  }

  return (
    <Context.Provider
      value={{
        setShowAction,
        editName,
        editMail,
        changeData,
        seteditName,
        showAction,
        informition,
        dispatch,
        seteditMail,
        seteditPhone,
        editPhone,
        cancelChange
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useData = () => useContext(Context);

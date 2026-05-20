"use client";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const Context = createContext();
export const ChangeData = ({ children }) => {
  const [showAction, setShowAction] = useState(false);
  const [editName, seteditName] = useState("Ahmed");
  const [editPhone, seteditPhone] = useState("0599999999");
  const initialState = {
    userName: "Ahmed",
    phoneNumber: "0599999999"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "USER_NAME":
        return { ...state, userName: action.val };
      case "PHONE_NUMBER":
        return { ...state, phoneNumber: action.val };
      default:
        return state;
    }
  };
  const [informition, dispatch] = useReducer(reducer, initialState);

  const changeData = () => {
    dispatch({ type: "USER_NAME", val: editName });
    dispatch({ type: "PHONE_NUMBER", val: editPhone });
  localStorage.setItem("userName", editName)
    localStorage.setItem("phone", editPhone)
    setShowAction(false);
  };
  
  useEffect(() => {
    const name = localStorage.getItem("userName")
    const phone = localStorage.getItem("phone")
    if (name) {
      
      dispatch({type: "USER_NAME", val: name})
      dispatch({type: "PHONE_NUMBER", val: phone})
      seteditName(name)
      seteditPhone(phone)
    }
  }, [])
  
        
  const cancelChange = () => {
    seteditName(informition.userName)
    seteditPhone(informition.phoneNumber)
    setShowAction(false)
  }

  return (
    <Context.Provider
      value={{
        setShowAction,
        editName,
        changeData,
        seteditName,
        showAction,
        informition,
        dispatch,
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

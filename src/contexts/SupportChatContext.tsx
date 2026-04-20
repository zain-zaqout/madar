"use client";
import { createContext, useContext, useState } from "react";
import { useShip } from "./ShipmentsContext";
import { useRouter } from "next/navigation";

export const Context = createContext();
export const SupportChatContext = ({ children }) => {
  const { supportFilter } = useShip();
  const [SubjectChat, setSubjectChat] = useState("مشكلة في الجمركة");
  const [shipment, setshipment] = useState("استفسار عام");
  const [Trip, setTrip] = useState("");

  const [InputValue, setInputValue] = useState("");
  const [Messages, setMessages] = useState([]);
  const [isTypeing, setisTypeing] = useState(false);

  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const startChat = () => {
    setisLoading(true);
    setTimeout(() => {
      router.replace("/support_chat");
      if (shipment === "استفسار عام") {
        setTrip("...");
        setisLoading(false);
      } else {
        supportFilter.filter((i: any) => {
          i.id === shipment ? setTrip(i.route) : i;
        });
        setisLoading(false);
      }
    }, 2000);
  };
  const houer = new Date().getHours();
    const minutes = new Date().getMinutes();
    const timeNow = `${houer}:${minutes}`;
  const handelaAdNewMessage = () => {
    if (InputValue.trim() === "") return
    const useMessage = {text: InputValue, sender: "customer", time: timeNow}
    setMessages((prev) => [...prev, useMessage])
    setInputValue("")
  }

  return (
    <Context.Provider
      value={{
        SubjectChat,
        setSubjectChat,
        shipment,
        setshipment,
        startChat,
        isLoading,
        setisLoading,
        Trip,
        Messages,
        setMessages,
        InputValue,
        setInputValue,
        isTypeing,
        setisTypeing,
        handelaAdNewMessage,
        timeNow
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useChat = () => useContext(Context);

"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useShip } from "./ShipmentsContext";
import { toast } from "sonner";

export const Context = createContext();
export const CostCalculationContext = ({ children }) => {
  const [Wightt, setWightt] = useState(0.0);
  const [FinleWight, setFinleWight] = useState(0.0);
  const [Unit, setUnit] = useState("1");
  const [Price, setPrice] = useState(0.0);
  const [Bill, setBill] = useState(0.0);
  const [Taks, setTaks] = useState(0.0);
  const [Total, setTotal] = useState(0.0);
  const [servic, setServic] = useState(1);

  const [typeShipment, settypeShipment] = useState("بضائع عامة");

    const [isAdditionSuccessful, setIsAdditionSuccessful] = useState(false)
    
    const { setShipment, shipments } = useShip();
    const router = useRouter();

  const [isLoading, setisLoading] = useState(false);

  const initialState = {
    nameOfSend: "",
    cityOfSend: "الرياض",
    countryOfSend: "السعودية",
    addresOfSend: "",
    phoneNumberOfSend: "",

    nameOfGet: "",
    cityOfGet: "الرياض",
    countryOfGet: "السعودية",
    mail: "",
    phoneNumberOfGet: "",

    content: "",
    post: 1,
    billNumber: "",

    wight: "",
    width: "",
    hight: "",
    tens: "",

    id: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "WIDTH":
        return { ...state, width: action.val };
      case "WIGHT":
        return { ...state, wight: action.val };
      case "HIGHT":
        return { ...state, hight: action.val };
      case "TENS":
        return { ...state, tens: action.val };
      case "NAME_OF_SEND":
        return { ...state, nameOfSend: action.val };
      case "CITY_OF_SEND":
        return { ...state, cityOfSend: action.val };
      case "COUNTRY_OF_SEND":
        return { ...state, countryOfSend: action.val };
      case "ADDRES_OF_SEND":
        return { ...state, addresOfSend: action.val };
      case "PHONE_OF_SEND":
        return { ...state, phoneNumberOfSend: action.val };
      case "NAME_OF_GET":
        return { ...state, nameOfGet: action.val };
      case "CITY_OF_GET":
        return { ...state, cityOfGet: action.val };
      case "COUNTRY_OF_GET":
        return { ...state, countryOfGet: action.val };
      case "MAIL":
        return { ...state, mail: action.val };
      case "PHONE_OF_GET":
        return { ...state, phoneNumberOfGet: action.val };
      case "CONTENT":
        return { ...state, content: action.val };
      case "POST":
        return { ...state, post: action.val };
      case "BILL_NUMBER":
        return { ...state, billNumber: action.val };
      case "SERIAL_NUMBER":
        return { ...state, id: action.val };
      default:
        return state;
    }
  };

  const [ship, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const generateNumericSerial = () => {
      const randomNumbers = Math.floor(10000 + Math.random() * 90000);
      return `MD-${randomNumbers}`;
    };

    const serialResult = generateNumericSerial();

    dispatch({ type: "SERIAL_NUMBER", val: serialResult });
  }, [dispatch]);

  useEffect(() => {
    if (ship.width && ship.hight && ship.tens && ship.wight) {
      const widhtt = Math.ceil((ship.width * ship.hight * ship.tens) / 5000);
      setWightt(widhtt);

      setFinleWight(Math.max(Wightt, ship.wight));

      if (Unit === "") return;
      let priceTypeShipment = 0;
      if (typeShipment === "بضائع عامة") priceTypeShipment = 5;
      if (typeShipment === "أدوية ومواد طبية") priceTypeShipment = 10;
      if (typeShipment === "أثاث ومفروشات") priceTypeShipment = 15;
      if (typeShipment === "معدات وآلات ثقيلة") priceTypeShipment = 20;
      if (typeShipment === "مواد غذائية/سريعة التلف") priceTypeShipment = 25;

      setPrice(FinleWight * Number(Unit) * priceTypeShipment);


      if (servic === 2) {
        setBill(Price * 0.2);
      } else if (servic !== 2) {
        setBill(0.0);
      }

      setTaks(Price * 0.15);
      setTotal(Price + Taks + Bill);

    }
  });
  useEffect(() => {
    if (
      ship.width === "" ||
      ship.width === "0" ||
      ship.hight === "" ||
      ship.hight === "0" ||
      ship.wight === "" ||
      ship.wight === "0" ||
      ship.tens === "" ||
      ship.tens === "0"
    ) {
      setTaks(0.0);
      setBill(0.0);
      setTotal(0.0);
      setPrice(0.0);
      setWightt(0.0);
    } else if (Wightt === 0) {
      setTaks(0.0);
      setBill(0.0);
      setTotal(0.0);
      setPrice(0.0);
    }
  });

  const addShip = () => {
    router.replace("/new-shipment/succss");
    setisLoading(false);

    const formatDate = () => {
  const now = new Date();
  
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  
  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const parts = formatter.formatToParts(now);
  
  const day = parts.find(p => p.type === 'day').value;
  const month = parts.find(p => p.type === 'month').value;
  const year = parts.find(p => p.type === 'year').value;

  return `${day} ${month}, ${year}`;
    };
    
    const shipmentDate = formatDate()

    const useNewShip = {
      id: ship.id,
      route: `${ship.cityOfGet} ← ${ship.cityOfSend}`,
      status: "قيد النقل",
      color: "text-orange-600",
      dot: "bg-orange-600",
      date: shipmentDate,
    };
    const newShipments = [useNewShip, ...shipments]
    setShipment(newShipments);
      
    localStorage.setItem("shipments", JSON.stringify(newShipments))
    setIsAdditionSuccessful(true)
    toast.success(`تم اضافة الشحنة رقم ${ship.id} بنجاح!`)
  };


  const expetTime =
    servic === 1
      ? "3-5 ايام"
      : servic === 2
        ? "24 ساعة"
        : servic === 3
          ? "2-3 ايام"
          : "14 يوم";
  const isReadyToShip =
    ship.nameOfSend.length >= 5 &&
    ship.addresOfSend.length >= 5 &&
    ship.phoneNumberOfSend.length === 10 &&
    ship.nameOfGet.length >= 5 &&
    ship.mail.length >= 5 &&
    ship.phoneNumberOfGet.length === 10 &&
    ship.content.length >= 5 &&
    FinleWight > 0;
  return (
    <Context.Provider
      value={{
        isReadyToShip,
        Wightt,
        setWightt,
        FinleWight,
        setFinleWight,
        Unit,
        setUnit,
        Price,
        setPrice,
        ship,
        dispatch,
        servic,
        setServic,
        Taks,
        Total,
        Bill,
        typeShipment,
        settypeShipment,
        addShip,
        isLoading,
        setisLoading,
        expetTime,
        setIsAdditionSuccessful,
        isAdditionSuccessful,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useCalc = () => useContext(Context);

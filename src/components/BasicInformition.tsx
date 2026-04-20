import { useData } from "@/contexts/UserContext";

const BasicInformition = () => {
  const {
    informition,
    showAction,
    editName,
    seteditName,
    editMail,
    editPhone,
    seteditPhone,
    seteditMail,
  } = useData();
  return (
    <section className="bg-white mt-5 px-5 py-5.5 rounded-3xl">
      <div className="border-r-3 border-orange-800 pr-2">
        <h3 className="text-lg font-bold">المعلومات الأساسية</h3>
      </div>
      <div className="grid grid-cols-2 max-[680px]:grid-cols-1 gap-4 pt-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="userName" className="text-[15px]">
            الإسم الكامل
          </label>
          <input
            type="text"
            id="userName"
            value={(showAction ? editName : informition.userName) || ""}
            onChange={(e) => seteditName(e.target.value)}
            readOnly={!showAction}
            maxLength={12}
            className="bg-blue-50 focus:shadow-md focus:outline focus:outline-orange-500 duration-300 rounded-xl text-sm px-4 py-3"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="phoneNumber" className="text-[15px]">
            رقم الهاتف
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={(showAction ? editPhone : informition.phoneNumber) || ""}
            onChange={(e) => seteditPhone(e.target.value)}
            readOnly={!showAction}
            maxLength={10}
            className="bg-blue-50 focus:shadow-md focus:outline focus:outline-orange-500 duration-300 rounded-xl text-sm px-4 py-3"
          />
        </div>
        <div className="flex flex-col space-y-1 col-span-full">
          <label htmlFor="mail" className="text-[15px]">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="mail"
            value={(showAction ? editMail : informition.mail) || ""}
            onChange={(e) => seteditMail(e.target.value)}
            readOnly={!showAction}
            className="bg-blue-50 focus:shadow-md focus:outline focus:outline-orange-500 duration-300 rounded-xl text-sm px-4 py-3"
          />
        </div>
      </div>
    </section>
  );
};
export default BasicInformition;

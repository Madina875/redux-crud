import { memo } from "react";
import bgimg from "../../assets/clipboard-image-1757733462.png";

const AddCar = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center w-[100%] h-[100%] blur-md"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>
      <form
        action=""
        className=" z-50 flex flex-col w-[40%] h-[50%] gap-[30px] p-[30px] items-center justify-center rounded-2xl bg-white/80 "
      >
        <input
          className="border w-full h-[30%] indent-5 text-2xl rounded-2xl"
          type="text"
          placeholder="name"
        />
        <input
          className="border w-full h-[30%] indent-5 text-2xl rounded-2xl"
          type="number"
          placeholder="price"
        />
        <input
          className="border w-full h-[30%] indent-5 text-2xl rounded-2xl"
          type="text"
          placeholder="category"
        />
        <button className="border h-[20%] w-[30%] rounded-xl bg-black text-white text-2xl hover:bg-gray-800">
          send
        </button>
      </form>
    </div>
  );
};

export default memo(AddCar);

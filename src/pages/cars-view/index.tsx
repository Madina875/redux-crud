import { memo } from "react";
import bgimg from "../../assets/clipboard-image-1757733462.png";

const CarsView = () => {
  return (
    <div
      className="border bg-gray-300 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="min-h-[1000px] m-[30px] border rounded-2xl bg-center text-white bg-cover backdrop-blur-md grid grid-cols-3 gap-[30px] p-[20px]">
        <div className="border p-[20px] h-[400px] rounded-2xl overflow-auto no-scrollbar">
          <div className="h-[60%] bg-gray-800 rounded-2xl border"></div>
          <div className=" rounded-2xl grid gap-[10px] mt-[20px] p-[10px] ">
            <h3 className="text-3xl italic"> name: sfghjhgf</h3>
            <strong className="text-2xl">price: $765</strong>
            <p>
              color: red blue orange Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, iure.
            </p>
          </div>
        </div>{" "}
        <div className="border p-[20px] h-[400px] rounded-2xl overflow-auto no-scrollbar">
          <div className="h-[60%] bg-gray-800 rounded-2xl border"></div>
          <div className=" rounded-2xl grid gap-[10px] mt-[20px] p-[10px] ">
            <h3 className="text-3xl italic"> name: sfghjhgf</h3>
            <strong className="text-2xl">price: $765</strong>
            <p>
              color: red blue orange Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, iure.
            </p>
          </div>
        </div>{" "}
        <div className="border p-[20px] h-[400px] rounded-2xl overflow-auto no-scrollbar">
          <div className="h-[60%] bg-gray-800 rounded-2xl border"></div>
          <div className=" rounded-2xl grid gap-[10px] mt-[20px] p-[10px] ">
            <h3 className="text-3xl italic"> name: sfghjhgf</h3>
            <strong className="text-2xl">price: $765</strong>
            <p>
              color: red blue orange Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, iure.
            </p>
          </div>
        </div>{" "}
        <div className="border p-[20px] h-[400px] rounded-2xl overflow-auto no-scrollbar">
          <div className="h-[60%] bg-gray-800 rounded-2xl border"></div>
          <div className=" rounded-2xl grid gap-[10px] mt-[20px] p-[10px] ">
            <h3 className="text-3xl italic"> name: sfghjhgf</h3>
            <strong className="text-2xl">price: $765</strong>
            <p>
              color: red blue orange Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, iure.
            </p>
          </div>
        </div>{" "}
        <div className="border p-[20px] h-[400px] rounded-2xl overflow-auto no-scrollbar">
          <div className="h-[60%] bg-gray-800 rounded-2xl border"></div>
          <div className=" rounded-2xl grid gap-[10px] mt-[20px] p-[10px] ">
            <h3 className="text-3xl italic"> name: sfghjhgf</h3>
            <strong className="text-2xl">price: $765</strong>
            <p>
              color: red blue orange Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CarsView);

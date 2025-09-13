import { memo } from "react";
import bgimg from "../../assets/clipboard-image-1757733462.png";

const CarsView = ({ cars, onRemove, onUpdate }: any) => {
  return (
    <div
      className="border bg-gray-300 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="min-h-[1000px] m-[30px] border rounded-2xl bg-center text-white bg-cover backdrop-blur-md grid grid-cols-3 gap-[30px] p-[20px]">
        {cars?.map((car: any) => (
          <div key={car.id} className="border p-[20px] h-[450px] rounded-2xl ">
            <div className="h-[50%] bg-gray-800 rounded-2xl border"></div>
            <div className=" rounded-2xl grid gap-[10px] p-[10px] ">
              <h3 className="text-3xl italic"> name: {car.name}</h3>
              <strong className="text-2xl ">price: {car.price}$</strong>
              <p className="overflow-auto no-scrollbar h-[30px]">
                colors: {car.color}overflow-auto no-scrollbarsdfghgfdsdfghj
                serghgfd
              </p>
            </div>
            <div className="flex w-[100%] h-[40px] gap-[20px] mt-[10px]">
              <button
                onClick={() => onRemove(car.id)}
                className=" hover:bg-gray-800 border w-[100%] h-[100%]"
              >
                remove
              </button>
              <button
                onClick={() => onUpdate(car)}
                className=" hover:bg-gray-800 border w-[100%] h-[100%]"
              >
                update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CarsView);

import {
  memo,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import bgimg from "../../assets/clipboard-image-1757733462.png";
import { useDispatch, useSelector } from "react-redux";
import { add, cancel, update } from "../../lib/features/dataSlice";
import type { RootState } from "../../lib";
import { useNavigate } from "react-router-dom";

interface IState {
  name: string;
  price: number;
  color: string;
}

const initialState: IState = {
  name: "",
  price: 0,
  color: "",
};

const AddCar = () => {
  const [formData, setFormData] = useState<IState>(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edittingItem = useSelector(
    (state: RootState) => state.data.edittingItem
  );
  useEffect(() => {
    if (edittingItem) {
      setFormData(edittingItem);
    }
  }, [edittingItem]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edittingItem) {
      const updatedItem = {
        ...formData,
        id: edittingItem.id,
      };
      console.log(updatedItem);
      dispatch(update(updatedItem));
      navigate("/add");
    } else {
      const car = {
        ...formData,
        id: Date.now(),
      };
      dispatch(add(car));
    }
    setFormData(initialState);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    if (edittingItem) {
      setFormData(initialState);
      navigate("/cars");
    }
    dispatch(cancel(""));
  };
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center w-[100%] h-[100%] blur-md"
        style={{ backgroundImage: `url(${bgimg})` }}
      ></div>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" z-50 flex flex-col w-[40%] h-[50%] gap-[30px] p-[30px] items-center justify-center rounded-2xl bg-white/80 "
      >
        <input
          className="border w-full h-[30%] indent-5 text-2xl rounded-2xl"
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="border w-full h-[30%] indent-5 text-2xl rounded-2xl"
          type="number"
          placeholder="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          className="border w-full h-[30%] indent-5 text-2xl rounded-2xl"
          type="text"
          placeholder="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <button className="border h-[20%] w-[30%] rounded-xl bg-black text-white text-2xl hover:bg-gray-800">
          send
        </button>
        {edittingItem && (
          <button onClick={handleCancel} type="button">
            cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default memo(AddCar);

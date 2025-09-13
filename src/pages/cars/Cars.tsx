import { memo } from "react";
import CarsView from "../cars-view";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../lib";
import {
  remove,
  setEdittingItem,
  type ICar,
} from "../../lib/features/dataSlice";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const data = useSelector((state: RootState) => state.data.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const edittingItem = useSelector(
    (state: RootState) => state.data.edittingItem
  );
  console.log(edittingItem);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };
  const handleUpdate = (item: ICar) => {
    dispatch(setEdittingItem(item));
    navigate("/add");
  };
  return (
    <CarsView cars={data} onRemove={handleRemove} onUpdate={handleUpdate} />
  );
};

export default memo(Cars);

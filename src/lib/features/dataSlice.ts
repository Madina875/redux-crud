import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ICar {
  id: number;
  name: string;
  price: number;
  color: string;
}

interface IData {
  value: ICar[];
  edittingItem: null | ICar;
}

const jsonData = localStorage.getItem("cardata");

const initialState: IData = {
  value: jsonData ? JSON.parse(jsonData) : [],
  edittingItem: null,
};

export const dataSlice = createSlice({
  name: "cardata",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICar>) => {
      state.value.push(action.payload);
      localStorage.setItem("cardata", JSON.stringify(state.value));
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("cardata", JSON.stringify(state.value));
    },
    setEdittingItem: (state, action: PayloadAction<ICar>) => {
      state.edittingItem = action.payload;
    },
    update: (state, action: PayloadAction<ICar>) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.edittingItem = null;
      localStorage.setItem("cardata", JSON.stringify(state.value));
    },
    cancel: (state, action: PayloadAction<"">) => {
      action.payload = "";
      state.edittingItem = null;
    },
  },
});

export const { add, remove, setEdittingItem, update, cancel } =
  dataSlice.actions;

export default dataSlice.reducer;

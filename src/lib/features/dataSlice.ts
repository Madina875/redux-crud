import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
  id: number;
  name: string;
  message: string;
}

interface IData {
  value: IItem[];
  edittingItem: null | IItem;
}

const jsonData = localStorage.getItem("data");

const initialState: IData = {
  value: jsonData ? JSON.parse(jsonData) : [],
  edittingItem: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IItem>) => {
      state.value.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state.value));
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state.value));
    },
    setEdittingItem: (state, action: PayloadAction<IItem>) => {
      state.edittingItem = action.payload;
    },
    update: (state, action: PayloadAction<IItem>) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.edittingItem = null;
      localStorage.setItem("data", JSON.stringify(state.value));
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

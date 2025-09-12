import { memo } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout";
import Home from "./Home";
import Add from "./Add";
import Cars from "./Cars";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/cars" element={<Cars />} />
      </Route>
    </Routes>
  );
};

export default memo(AppRouter);

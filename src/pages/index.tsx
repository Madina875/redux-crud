import { memo } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout";
import Add from "./add/Add";
import Cars from "./cars/Cars";
import Home from "./home/Home";

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

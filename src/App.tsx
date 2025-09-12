import { memo } from "react";
import AppRouter from "./pages/index";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default memo(App);

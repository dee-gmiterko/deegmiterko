import { useContext } from "react";
import AppContext from "../contexts/appContext";

const useApp = () => {
  const app = useContext(AppContext);
  if (!app) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return app;
};

export default useApp;

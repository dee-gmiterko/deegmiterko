import { useContext } from "react";
import PageContext from "../contexts/pageContext";

const usePage = () => {
  const page = useContext(PageContext);
  if (!page) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return page;
};

export default usePage;

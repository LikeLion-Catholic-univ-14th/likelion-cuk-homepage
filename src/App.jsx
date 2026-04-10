import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;

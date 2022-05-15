import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IconContext } from "react-icons";

import Main from "./main";
import SideA from "./sidebar-a";
import SideB from "./sidebar-b";

function App() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" />
          </Routes>
        </Router>
      </IconContext.Provider>
    </>
    // <div className="grid-container">
    //   <SideA ></SideA>
    //   <Main></Main>
    //   <SideB></SideB>
    // </div>
  );
}

export default App;

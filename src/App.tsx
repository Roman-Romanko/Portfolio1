import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { navItems } from "./components";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Team } from "./pages/Team";
// import { Pricing } from "./pages/Pricing";
// import { Portfolio } from "./pages/Portfolio";
// import { Contact } from "./pages/Contact";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden flex'>
        <div className="w-20 max-lg:hidden">
          <Sidebar />
        </div>
        <div className="mx-40 max-lg:mx-0 w-full overflow-y-auto">
          {navItems.map((item) => (
            <div id={item.label}>{item.element}</div>
          ))}
        </div>
      </div>
    </Router>
  );
};

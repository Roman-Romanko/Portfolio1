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
        <Sidebar />
        <div className="h-screen mx-40 w-full">
          <Routes>
            {navItems.map((item) => (
              <Route path={item.path} element={item.element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

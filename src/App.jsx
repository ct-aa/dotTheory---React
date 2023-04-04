import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WhatIsNewInReact from "./components/WhatIsNewInReact/WhatIsNewInReact";
import DataFetchingInReact from "./components/DataFetchingInReact/DataFetchingInReact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import UserDetails from "./components/DataFetchingInReact/subComponents/UserDetails";
import NotFound from "./components/NotFound/NotFound";
import { useState, createContext } from "react";
import ReactHooks from "./components/ReactHooks/ReactHooks";
import "./App.css";

export const NightModeContext = createContext();

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const nightModeButtonLabel = isNightMode
    ? "Turn off Night Mode"
    : "Turn on Night Mode";

  const toggleIsNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <NightModeContext.Provider value={isNightMode}>
      <Router basename="/dotTheory---React">
        <div className="App">
          <div className="night-mode-button-container">
            <button className="night-mode-button" onClick={toggleIsNightMode}>
              {nightModeButtonLabel}
            </button>
          </div>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* Static Route - Demo */}
              <Route
                path="/what-is-new-in-react"
                element={<WhatIsNewInReact />}
              />
              <Route
                path="/data-fetching-in-react"
                element={<DataFetchingInReact />}
              />
              {/* Navigate(Redirect) Route - Demo */}
              <Route path="/redirect-demo" element={<Navigate to="/" />} />
              <Route path="/react-hooks" element={<ReactHooks />} />
              {/* Dynamic Routes - Demo */}
              <Route path="/user/:name" element={<UserDetails />} />
              {/* Catch All Route - Demo */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </NightModeContext.Provider>
  );
};

export default App;

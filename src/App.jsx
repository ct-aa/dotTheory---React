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

const App = () => {
  return (
    <Router>
      <div className="App">
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
            {/* Dynamic Routes - Demo */}
            <Route path="/user/:name" element={<UserDetails />} />
            {/* Catch All Route - Demo */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

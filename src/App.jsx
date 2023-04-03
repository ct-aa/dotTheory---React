import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatIsNewInReact from "./components/WhatIsNewInReact/WhatIsNewInReact";
import DataFetchingInReact from "./components/DataFetchingInReact/DataFetchingInReact";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route
              path="/what-is-new-in-react"
              element={<WhatIsNewInReact />}
            ></Route>
            <Route
              path="/data-fetching-in-react"
              element={<DataFetchingInReact />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

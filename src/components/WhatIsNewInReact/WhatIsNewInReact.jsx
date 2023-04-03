import ReactDOM from "react-dom";
import DemoReturnArray from "./subComponents/DemoReturnArray";
import DemoReturnString from "./subComponents/DemoReturnString";
import DemoReturnNumber from "./subComponents/DemoReturnNumber";
import { useState } from "react";
import catImage from "../../assets/cat.jpeg";
import "./WhatIsNewInReact.css";

const WhatIsNewInReact = () => {
  const [showCat, setShowCat] = useState(false);

  return (
    <div>
      <h1 className="headline">What's New in React</h1>

      {/* Return Types - Demo */}

      <div className="demo-block">
        <h2>Array Return - Demo</h2>
        <DemoReturnArray />
      </div>

      <div className="demo-block">
        <h2>String Return - Demo</h2>
        <DemoReturnString />
      </div>

      <div className="demo-block">
        <h2>Number Return - Demo</h2>
        <DemoReturnNumber />
      </div>

      {/* React Portal - Demo */}

      {ReactDOM.createPortal(
        <div>Portal Demo</div>,
        document.getElementById("portal-demo")
      )}

      {/* Returning Null - Demo */}
      <div className="demo-block">
        <h2>Null Return - Demo</h2>

        <div>
          <button
            className="show-button"
            onClick={() => {
              setShowCat(true);
            }}
          >
            Show Cat
          </button>

          <button
            className="hide-button"
            onClick={() => {
              setShowCat(false);
            }}
          >
            Hide Cat
          </button>
        </div>

        {/* Instead of conditional statement returning null, we can check if the showCat is not equal to false or null */}
        {showCat && (
          <div>
            <img className="cat-image" src={catImage} alt="Cat Image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatIsNewInReact;

import { useContext, useEffect, useState } from "react";
import { NightModeContext } from "../../App";
import sampleText from "../../constants/SampleText";
import "./ReactHooks.css";

const ReactHooks = () => {
  const [nightModeStatus, setNightModeStatus] = useState("");

  const isNightMode = useContext(NightModeContext);
  const containerClass = isNightMode ? "container-night-mode" : "container";

  useEffect(() => {
    if (!isNightMode) {
      setNightModeStatus("Night mode is off");
    } else {
      setNightModeStatus("Night mode is on");
    }
  }, [isNightMode]);

  return (
    <div>
      <h1 className="headline">React Hooks</h1>
      <div className="demo-block">
        <h2>useState and useEffect - Demo</h2>
        <div className="night-mode-status">{nightModeStatus}</div>
      </div>
      <div className="demo-block">
        <h2>React Context - Demo</h2>
        <div className={containerClass}> {sampleText}</div>
      </div>
    </div>
  );
};

export default ReactHooks;

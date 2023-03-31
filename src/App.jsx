import './App.css';
import ReactDOM from 'react-dom';
import DemoReturnArray from './DemoReturnArray';
import DemoReturnString from './DemoReturnString';
import DemoReturnNumber from './DemoReturnNumber';
import { useState } from 'react';
import catImage from './assets/cat.jpeg'

const App = () => {
  const [showCat, setShowCat] = useState(false);
  
  return (
    <div className="App">
      {/* New Return Types - Demo */}
      
      {/* Array Return */}
      <div>
        <h3>Array Return - Demo</h3>
        <DemoReturnArray />
      </div>
      
      {/* String Return */}
      <div>
        <h3>String Return - Demo</h3>
        <DemoReturnString />
      </div>
      
      {/* Number Return */}
      <div>
        <h3>Number Return - Demo</h3>
        <DemoReturnNumber />
      </div>

      {/* React Portal - Demo */}
      {ReactDOM.createPortal(
        <h3>Portal Demo</h3>,
        document.getElementById('portal-demo')
      )}

      {/* Returning Null - Demo */}
      <h3>Null Return - Demo</h3>
      <div>
        <button onClick={()=>{setShowCat(true)}}>Show Cat</button>
        <button onClick={()=>{setShowCat(false)}}>Hide Cat</button>
      </div>
      {/* Instead of conditional statement returning null, we can check if the showCat is not equal to false or null */}
      {showCat && (
        <div>
          <img src={catImage} alt="Cat Image" />
        </div>
      )}
    </div>
  )
}

export default App;

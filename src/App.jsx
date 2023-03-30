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
        <h3>Our Cats</h3>
        <DemoReturnArray />
      </div>
      
      {/* String Return */}
      <div>
        <DemoReturnString />
      </div>
      
      {/* Number Return */}
      <div>
        <DemoReturnNumber />
      </div>

      {/* React Portal - Demo */}
      {ReactDOM.createPortal(
        <div>Test from inside the Portal!</div>,
        document.getElementById('portal-demo')
      )}

      {/* Returning Null - Demo */}
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

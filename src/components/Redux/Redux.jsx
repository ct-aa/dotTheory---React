import { useSelector, useDispatch } from "react-redux";
import { calculate } from "../../redux/calculator/calculatorSlice";
import { useRef } from "react";
import "./Redux.css";

const Redux = () => {
  const firstNumberRef = useRef(0);
  const secondNumberRef = useRef(0);
  const operationRef = useRef("");
  const total = useSelector((state) => state.calculator.total);
  const dispatch = useDispatch();

  const handleCalculation = () => {
    dispatch(
      calculate({
        firstNumber: parseInt(firstNumberRef.current.value),
        secondNumber: parseInt(secondNumberRef.current.value),
        operation: operationRef.current.value,
      })
    );
  };

  return (
    <section>
      <h1 className="headline">Redux</h1>
      <div className="demo-block">
        <div className="calculator-wrapper">
          <input
            className="input-field"
            ref={firstNumberRef}
            type="number"
            id="firstNumber"
            placeholder="0"
          />
          <select
            name="operation"
            id="operation"
            ref={operationRef}
            className="operation"
          >
            <option value="addition">+</option>
            <option value="subtraction">-</option>
            <option value="multiplication">*</option>
            <option value="division">/</option>
          </select>
          <input
            className="input-field"
            ref={secondNumberRef}
            type="number"
            id="secondNumber"
            placeholder="0"
          />
          <button
            className="equals-btn"
            onClick={() => {
              handleCalculation();
            }}
          >
            =
          </button>
          <div className="total">{total}</div>
        </div>
      </div>
    </section>
  );
};

export default Redux;

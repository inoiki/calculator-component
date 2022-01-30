import React, {useState} from "react";
import "./index.css";

export default function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  let [operator, setOperator] = useState('+');
  let [totalOperations, setTotalOperations] = useState(0);

  const addOperator = () => {
    const addVal = (+number1) + (+number2);
    totalOperations += 1;
    
    setTotalOperations(totalOperations)
    setOperator('+');
    setResult(addVal);
  }

  const subtractOperator = () => {
    const subtractVal = (+number1) - (+number2);
    totalOperations += 1;
    
    setTotalOperations(totalOperations)
    setOperator('-');
    setResult(subtractVal);
  }

  const multiplyOperator = () => {
    const multiplyVal = (+number1) * (+number2);
    totalOperations += 1;
    
    setTotalOperations(totalOperations)
    setOperator('*');
    setResult(multiplyVal);
  }

  const divideOperator = () => {
    const divideVal = (+number1) / (+number2);
    totalOperations += 1;
    
    setTotalOperations(totalOperations)
    setOperator('/');
    setResult(divideVal);
  }

  const resetAll = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
    setOperator('+');
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Total operations performed: {totalOperations}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                  name="input1" value={number1} onChange={e => setNumber1(e.target.value)}/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operator}</label>
            <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                  placeholder="Eg: 2" value={number2} onChange={e => setNumber2(e.target.value)}/>
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button className="operationFont" type="submit" data-testid="addButton" onClick={addOperator}>+</button>
            <button className="operationFont" type="submit" data-testid="subtractButton" onClick={subtractOperator}>-</button>
            <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={multiplyOperator}>*</button>
            <button className="operationFont" type="submit" data-testid="divideButton" onClick={divideOperator}>/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button type="reset" data-testid="resetButton" className="outline danger" onClick={resetAll}>Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {result !== '' && 
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in">Result: {result}</div>
              }
            </div>
          </div>
        </section>

      </div>
    </div>
  );

}
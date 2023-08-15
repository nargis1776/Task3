import React, { useState } from 'react';



const ChartFormation = () => {

  const [box1Value, setBox1Value] = useState();
  const [box2Value, setBox2Value] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleBox1Change = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - value;
    setBox1Value(value);
    setBox2Value(remainingValue);
    
    if (value !== '' && parseFloat(value) > 100) {
      setErrorMessage('Value must be less than oe equal to 100');
    } else {
      setErrorMessage('');
    }
  };

  const handleBox2Change = (e) => {
    const value = parseInt(e.target.value);
    const remainingValue = 100 - value;
    setBox2Value(value);
    setBox1Value(remainingValue);
  };

  return (
    <>
      <div class="row1" className='row1'>
        <div class="col-md-3" className='box' style={{marginRight:"5px"}}>
          <label htmlFor="box1"> <strong>Box 1 :</strong>  </label>
          <input
            type="number"
            id="box1"
            value={box1Value}
            onChange={handleBox1Change}
            max={100}
          // sx={{ marginRight: "20px" }}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        <div class="col-md-3" className='box'  style={{marginRight:"2px"}}>
          <label htmlFor="box2"> <strong>Box 2 :</strong>  </label>
            <input
              type="number"
              id="box2"
              value={box2Value}
              onChange={handleBox2Change}
              max={100}
            />
        </div>

        <div class="col-md-2">
          <button type="button"  class="btn btn-success py-1">Create Chart</button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/70%25_pie_chart.svg/1024px-70%25_pie_chart.svg.png" />
        </div>
      </div>

    </>
  );
};


export default ChartFormation;

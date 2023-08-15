
import React, { Component } from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className='container'>
        <div class="row" className='row'>
          <div class="col-6" className='box'>
            <label>
              First Name
              <input type='text' />
            </label>
          </div>

          <div class="col-6" className='box'>
            <label>
              Last Name
            </label>
            <input type='text' />
          </div>
        </div>
        <div class="row" className='row row2' >

          <div class="col-6 " className='select'>
            <FormControl>
              <FormLabel style={{color:"black"}} >How should we contact you?</FormLabel>
              <RadioGroup className='RadioGroup'
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                style={{display:"inline-block"}}
                value={selectedOption} onChange={this.handleOptionChange}
              >
                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                <FormControlLabel value="email" control={<Radio />} label="Email" />
              </RadioGroup>
            </FormControl>
          </div>

          <div class="col-6" >
            {selectedOption === 'phone' && (
              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
            )}

            {selectedOption === 'email' && (
              <div>
                <label>Email Address</label>
                <input type="email" placeholder="Enter email address" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

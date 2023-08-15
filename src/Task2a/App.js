import React, { Component } from 'react';

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
        <div class="row"className='row row2' >

        <div class="col-6 " className='select'>
          <label>How should we contact you?</label>
            <select style={{width:"190px" ,paddingTop:"4px" ,paddingBottom:"3px"}} value={selectedOption} onChange={this.handleOptionChange}>
              <option value="">Select an option</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
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

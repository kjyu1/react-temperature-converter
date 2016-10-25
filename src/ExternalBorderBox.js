import React, { Component } from 'react';
import './ExternalBorderBox.css';
import Title from './Title'
import UnitOfMeasurementRow from './UnitOfMeasurementRow'
import InputsRow from './InputsRow'

class ExternalBorderBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOneUnit: 'Kelvin',
      inputTwoUnit: 'Kelvin'
    };
  }

  changeInputOneUnit(newUnitName) {
    this.setState({inputOneUnit: newUnitName});
  }

  changeInputTwoUnit(newUnitName) {
    this.setState({inputTwoUnit: newUnitName});
  }


  render() {
    return (
      <div className="Border">
        <Title name="Converter!" />
        <UnitOfMeasurementRow onChangeInputOne={this.changeInputOneUnit.bind(this)} onChangeInputTwo={this.changeInputTwoUnit} />
        <InputsRow />
        <div>
          <span>
            1st: {this.state.inputOneUnit}, 2nd: {this.state.inputTwoUnit}
          </span>
        </div>
      </div>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default ExternalBorderBox;

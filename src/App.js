import React from 'react';
import logo from '../public/icon.ico'
import './App.css';

import Clock from './components/Clock';
import {Navbar} from './components/Navbar';
import {CustomTimeComponent} from './components/CustomTimeComponent';

class App extends React.Component {
  state = {
    standardTime:['0:10', '0:20', '0:30','1:00', '2:00', '3:00'],
    selectedTime:'',
    showCustomTime:false,
  }

  buttonClickHandler = (e, time) => {
    this.setState({selectedTime:time})
  }

  CustomTimeHandler = () => {
    this.setState({showCustomTime:!this.state.showCustomTime})
  }

  CustomTimeFormHandler = (e) => {
    this.setState({customTime:e.target.value})
  }

  onCustomFormSubmit = (e) => {
    e.preventDefault()
    this.setState({selectedTime:this.state.customTime, customTime:'', showCustomTime:false})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pomo Doro</h2>
        </div>
        <Clock selectedTime={this.state.selectedTime} />
        <Navbar className='Navbar' clickHandler={this.buttonClickHandler.bind(this)} standardTime={this.state.standardTime} customTime={this.CustomTimeHandler.bind(this)}/>
        {this.state.showCustomTime && <CustomTimeComponent FormInputHandler={this.CustomTimeFormHandler} onCustomFormSubmit={this.onCustomFormSubmit}/>}
      </div>
    );
  }
}

export default App;

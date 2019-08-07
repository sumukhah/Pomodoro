import React from 'react';
import './Clock.css';
import { Result } from './Result';

const TimerStyles = { animation: 'blink 1.5s linear infinite' }

class Clock extends React.Component {
  state = {
    selectedTime: 2700,
    selectedTimeCP: 2700,
    start: false,
  }

  componentDidMount = () => {
    setInterval((() => this.tick()), 1000)

  }

  //Takes new prop and pass into state by converting to minutes
  componentWillReceiveProps(nextProps, props) {
    var [hourTime, minuteTime] = nextProps.selectedTime.split(':')
    this.setState({ selectedTime: (hourTime * 3600) + Number(minuteTime * 60), selectedTimeCP: (hourTime * 3600) + Number(minuteTime * 60) })
  }

  //to start the timer
  timerButtonHandler = () => {
    this.setState({ start: !this.state.start })
  }

  tick = () => {
    if (this.state.start && this.state.selectedTime > 0) {
      this.setState({ selectedTime: this.state.selectedTime - 1 })
      document.title = 'seconds=>' + this.state.selectedTime
    }
  }

  render() {
    return (
      <div className="timer" onClick={this.timerButtonHandler}>
        {this.state.selectedTime ? <div className='TimeScreen' style={this.state.start ? null : TimerStyles}>
          {this.state.start ? <i className="pause icon"></i> : <i className="play icon"></i>}
          {parseInt(this.state.selectedTime / 3600, 10)}:{parseInt((this.state.selectedTime % 3600) / 60, 10)}:{this.state.selectedTime % 60}
        </div> : null}
        {this.state.selectedTimeCP && this.state.selectedTime ===0 ? <Result /> : null}
      </div>
    );
  }
}
export default Clock
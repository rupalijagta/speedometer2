// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  accelarateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main-container">
        <div className="second-container">
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
            className="image"
          />
          <p className="speed-text">Speed is {speed}mph</p>
          <p className="para">min limit is 0mhp, max limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="button1"
              onClick={this.accelarateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="button2"
              onClick={this.onBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer

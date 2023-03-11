// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>
            The Button has been clicked{' '}
            <span className="count-value">{count}</span> times
          </h1>
          <p>Click the button to increase the count</p>
          <button type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

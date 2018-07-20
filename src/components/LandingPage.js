import React from 'react'
import { Link } from 'react-router-dom'
import Typing from 'react-typing-animation';


export default class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      doneTyping: false
    }
    this.karen = this.karen.bind(this)
  }

  karen() {
    this.setState({
      doneTyping: true
    })
  }

  render() {
    return (
      <div className="landing">
        <Typing onFinishedTyping={this.karen}>
          <div>
            Hey there! I'm Aleks. <br />
            <Typing.Delay ms={1000} />
            It's nice to meet you! <br />
            <Typing.Delay ms={1000} />
            <br />
          </div>
        </Typing>
        {
          this.state.doneTyping
            ?
            <Link to={'/home'}><button id='main'>COME ON IN!</button></Link>
            :
            null
        }

      </div>
    )
  }
}

import React, { Component } from 'react'
import profilePic from '../images/aleks.jpg'
import './main.css'


export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className='bio'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit elit nec pellentesque interdum. Praesent sed mauris nibh. Fusce facilisis eleifend lectus. Proin pulvinar nunc non nunc vestibulum, id suscipit leo dignissim. Nullam id lectus varius, ultricies justo et, maximus est. Duis nec eleifend orci, id iaculis urna. Etiam vel risus eget elit varius ornare in sit amet leo. Mauris non ultrices lorem. Vivamus sem sapien, accumsan eu dui id, commodo mattis lacus. Ut quis condimentum velit. Quisque mi ligula, consectetur id nisi sit amet, semper lobortis ante. Nullam malesuada id diam ultricies congue. Fusce sem diam, egestas vitae elit id, ultricies fermentum dolor. Etiam lobortis condimentum erat a pretium. Donec a orci tellus.
          </p>
          <img src={profilePic} className="profile" alt="selfImg" />
        </div>
      </div>
    );
  }
}
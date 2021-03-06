import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { display: 'Hello there!' }
    this.displayKeyPad = this.displayKeyPad.bind(this)
    this.playSound = this.playSound.bind(this)
  }
  
  playSound (url) {
    let audio = new Audio(url);
    audio.play();
  }

  displayKeyPad (e) {
    e.preventDefault()
    this.setState({display: e.target.id})
    this.playSound(document.getElementById(e.target.innerText).src)
  }

  componentDidMount() {
    let keypad = document.getElementsByClassName('drum-pad')
    for (let i = 0; i < keypad.length; i++) {
      keypad[i].addEventListener('click', this.displayKeyPad)
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <table className="table key-pad">
          <tbody>
            <tr>
              <td className="drum-pad" id="heater-1" onClick={this.displayKeyPad}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>Q</td>
              <td className="drum-pad" id="heater-2"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>W</td>
              <td className="drum-pad" id="heater-3"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>E</td>
            </tr>
            <tr>
              <td className="drum-pad" id="heater-4_1"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>A</td>
              <td className="drum-pad" id="heater-6"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>S</td>
              <td className="drum-pad" id="disco"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>D</td>
            </tr>
            <tr>
              <td className="drum-pad" id="kick-n-hat"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z</td>
              <td className="drum-pad" id="kick-1"><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>X</td>
              <td className="drum-pad" id="CEV-H2"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>C</td>
            </tr>
          </tbody>

        </table>
        <div id="display">
          {this.state.display}
        </div>

      </div>
    );
  }
}

export default App;

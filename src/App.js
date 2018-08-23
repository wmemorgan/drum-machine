import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <table className="table key-pad">
          <tbody>
            <tr>
              <td className="drum-pad" id="Q"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip"></audio>Q</td>
              <td className="drum-pad" id="W"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip"></audio>W</td>
              <td className="drum-pad" id="E"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" ></audio>E</td>
            </tr>
            <tr>
              <td className="drum-pad" id="A"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip"></audio>A</td>
              <td className="drum-pad" id="S"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" ></audio>S</td>
              <td className="drum-pad" id="D"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" ></audio>D</td>
            </tr>
            <tr>
              <td className="drum-pad" id="Z"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip"></audio>Z</td>
              <td className="drum-pad" id="X"><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip"></audio>X</td>
              <td className="drum-pad" id="C"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip"></audio>C</td>
            </tr>
          </tbody>

        </table>
        <div id="display">
        </div>

      </div>
    );
  }
}

export default App;

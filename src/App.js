import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <table className="table key-pad">
          <tbody>
            <tr>
              <td className="drum-pad" id="q"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip"></audio>q</td>
              <td className="drum-pad" id="w"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip"></audio>w</td>
              <td className="drum-pad" id="e"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" ></audio>e</td>
            </tr>
            <tr>
              <td className="drum-pad" id="a"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip"></audio>a</td>
              <td className="drum-pad" id="s"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" ></audio>s</td>
              <td className="drum-pad" id="d"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" ></audio>d</td>
            </tr>
            <tr>
              <td className="drum-pad" id="z"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip"></audio>z</td>
              <td className="drum-pad" id="x"><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip"></audio>x</td>
              <td className="drum-pad" id="c"><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip"></audio>c</td>
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

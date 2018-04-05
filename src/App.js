import React, { Component } from 'react';
import './App.css';
import {COURSES} from './courses';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Upload TTAP data</h1>
        </header>
        <div>
          <form>
            <table>
              <tbody>
                <tr>
                  <th>Index</th>
                  <th>COURSE NAME</th>
                  <th>FILE</th>
                </tr>
              {this.state.courses.map((x, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{x}</td>
                  <td><input type="file" name={`file${index}`} id={`_file${index}`}/></td>
                </tr>
              ))}
              </tbody>
            </table>
            <input id="_submitBtn" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

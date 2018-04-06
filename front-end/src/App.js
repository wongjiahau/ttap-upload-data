import React, { Component } from 'react';
import './App.css';
import {COURSES} from './courses';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: COURSES.map(x => ({name: x, gotFile: false}))
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Upload TTAP data</h1>
        </header>
        <div>
          <form method="POST" action="http://localhost:8080/upload" encType="multipart/form-data">
            <table>
              <tbody>
                <tr>
                  <th>Index</th>
                  <th>COURSE NAME</th>
                  <th>FILE</th>
                  <th>STATUS</th>
                </tr>
              {this.state.courses.map((x, index) => (
                <tr style={{backgroundColor: x.gotFile ? "lightgreen" : ""}}>
                  <td>{index}</td>
                  <td>{x.name}</td>
                  <td><input type="file" onChange={this.handleFileOnChange(index)} accept=".html" name={`file${index}`} id={`_file${index}`}/></td>
                  <td>
                    {x.gotFile ? <span>&#10003;</span> : <span>&#10060;</span>}
                  </td>
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

  handleFileOnChange = (index) => () => {
    const newState = this.state;
    newState.courses[index].gotFile = true;
    this.setState(newState);
  }
}

export default App;

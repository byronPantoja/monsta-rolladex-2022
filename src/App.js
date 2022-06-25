import {Component} from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {firstName: 'Bee', lastName: 'Zee'},
      company: 'home',
    }
  }
      render() {
        const {lastName, firstName} = this.state.name;
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Hi I'm {firstName} {lastName}, I work from {this.state.company}.
              </p>
              <button
              onClick={()=> {
                this.setState(() => {
                  return {
                    name: {firstName: 'Dev', lastName: 'Bee'},
                  };
                }, () => {
                      console.log(this.state)
                    }
                );
              }}
              >
                Change Name
              </button>
            </header>
          </div>
        );
      }
    }


export default App;

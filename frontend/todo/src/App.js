import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

class App extends React.Component {
    render() {
        return ( 
            <div className="App">
                <LandingPage></LandingPage>
            </div>
        );
    }
}

export default App;
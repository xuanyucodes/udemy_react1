// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
    const buttonText = 'Click Me!';
    function getButtonText() { return 'Click on me functional!'; }

    return (
    <div>
        <div>Hi there!</div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white' }}>Submit {buttonText} {getButtonText()}</button>
    </div>
    );
};

// Take the React component and display on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
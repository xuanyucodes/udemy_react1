import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Functional
// const App = () => {

//     // the geolocation part, w function (success, failure)
//     window.navigator.geolocation.getCurrentPosition(
//         // success  callback
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return (
//         <div>Hi there!</div>
//     )
// };

// Class 
class App extends React.Component {
    
    // JS function that is called the very first time a new instance of App is created
    // actually inside React.Component there is a constructor() function already, so we are actually overwriting that function
    // but we still want all the setup code inside R.C's constructor() function to still be called, so we use super() to do that for us
    // super() is a reference to the parent's constructor() function.
    // --
    // constructor(props) {
    //     super(props); 

    //     // To intialise states. the only time we ever directly assign this.state.
    //     this.state = {lat: null, errorMessage: ''};
    // };

    // Alternate constructor method (more popular). Note how there is no "this." thing. Identical to defining constructor fn and setting state.
    // This works because Babel will convert the below code to something similar to the one above. All in all, shorter and more succint codes.
    state = {lat: null, errorMessage: ''};

    componentDidMount() { // called once first time component shows on screen
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition( // note that this doesn't run when constructor() is running. instead, it only runs AFTER constructor() is returned, and some point in future
            position => this.setState({ lat: position.coords.latitude }), // success  callback
            err => this.setState({ errorMessage: err.message }) // error callback
        );
    };

    componentDidUpdate() { // called each time component is updated and hence rerendered
        console.log('My component was just updated - it rerendered!');
    };

    // "helper function" so we can avoid conditionals
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) { // no lat, have error
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) { // have lat, no error
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request"/>;
    }

    // Mandatory to define
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    };
};

ReactDOM.render(<App/>, document.querySelector("#root"));
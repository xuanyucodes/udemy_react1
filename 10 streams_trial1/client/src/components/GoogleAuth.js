import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        // the second arg is because the process will take some time, so the callback is the fn to run after it is complete
        // scope is ask user what different parts of his profile he'll be providing to us
        window.gapi.load('client:auth2', 
            () => {
                window.gapi.client.init({
                    clientId: '621755719957-fpah4f6q6t0kbal30t3i8frdk7ce1eq6.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance(); // get the auth instance to do things with it.
                    // this.setState({isSignedIn: this.auth.isSignedIn.get()}); // because cDM() only executes after first render, so need setState() to rerender and update screen. not using anymore because we can use redux instead of component state.
                    console.log('Running onAuthChange to update store on ifSignedIn');
                    this.onAuthChange(this.auth.isSignedIn.get()); // update redux store if we logged in or not
                    console.log('onAuthChange completed! Store updated.');
                    this.auth.isSignedIn.listen(this.onAuthChange); // adds a listener. if isSignIn changes, execute function inside.
                });
            }
        );
    };

    onAuthChange = (isSignedIn) => { // receives arg true-false if signed in or not
        console.log('Check isSignedIn (' + isSignedIn + ') to update store.');
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId()); // if true, activate signIn AC
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => { this.auth.signIn({prompt: 'select_account'}); };

    onSignOutClick = () => { this.auth.signOut(); };

    renderAuthButton() {
        if (this.props.isSignedIn === null) { // dont know if signed in or not (aka not initialise GoogleAuth yet)
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign In with Google
                </button>
            );
        }
    };

    render() {
        console.log("GoogleAuth isSignedIn = " + this.props.isSignedIn);
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
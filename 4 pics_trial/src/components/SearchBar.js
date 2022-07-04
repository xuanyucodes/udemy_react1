import React from 'react';

// since i know i'll use state to handle user input, i will use class-based

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = (event) => {
        // so whenever user submits by pressing enter
        // 1) prevented default
        // 2) print out the term
        // 3) pass the term to the fn that was passed as a prop
        event.preventDefault();
        console.log(this.state.term);
        this.props.runWhenUserSubmits(this.state.term);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={e => this.setState({term: e.target.value})} 
                    /> 
                </div>
            </form>
        </div>
        );
    };
};

export default SearchBar;
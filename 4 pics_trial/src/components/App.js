import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {images: []};

    // pass this function downwards into SearchBar so can fill in w details
    onSearchSubmit = async (term) => { // when we put async in front of fn name, it allows us to use async await inside the fn. to use, just put async in front of method name, and find the code that is returning smth or taking some time to resolve (in this case is axios.get()) and put a await keyword before that. and from whatever is returned, assign to a var so we can work w it later on.
        console.log(term);
        const response = await unsplash.get('/search/photos', {  // first arg = address, second arg = object to customise request
            params: { query: term }
        });
        // .then((response) => { // usual method, but considered "harder" code
        //     console.log(response.data.results);
        // })
        console.log(this);
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}> 
                <SearchBar runWhenUserSubmits={this.onSearchSubmit} />
                Found: {this.state.images.length} images.
                <ImageList images={this.state.images}/>
            </div>
        );
    };
};

export default App;
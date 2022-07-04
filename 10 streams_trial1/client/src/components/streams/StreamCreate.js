import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    // to submit the form to backend
    onSubmit = (formValues) => {
        console.log('Submitting form values: ', formValues);
        this.props.createStream(formValues);
    };

    render() {
        console.log('Redux Form Props: ', this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    };
};

export default connect(null, {createStream})(StreamCreate);
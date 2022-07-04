import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// default properties, so if we forget to insert new props for the message, there's still this default
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
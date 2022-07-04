import React from 'react';
import {Field, Form} from 'react-final-form';
import { formValues } from 'redux-form';

class StreamForm extends React.Component {
    
    renderError({error, touched}) { // to customise what to show if validation error
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    // to render each Field
    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        );
    };

    // to submit the form to backend
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    // if input not filled, write an error for Redux Form to handle
    validate = (formValues) => {
        const errors = {};
        if (!formValues.title) { errors.title = 'You must enter a title.' };
        if (!formValues.description) { errors.description = 'You must enter a description.' };
        return errors;
    };

    render() {
        console.log('Redux Form Props: ', this.props);
        return (
            <Form 
                initialValues={this.props.initialValues}
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className="ui form error">
                        <Field name="title" component={this.renderInput} label="Enter Title"/>
                        <Field name="description" component={this.renderInput} label="Enter Description"/>
                        <button className="ui button primary">Submit</button>
                    </form>
                )}
            />
        );
    };
};

export default StreamForm;

// const StreamForm = (props) => {
//   return (
//     <Form
//       initialValues={props.initialValues}
//       onSubmit={onSubmit}
//       validate={}
//       render={({ handleSubmit }) => (
//         <form onSubmit={handleSubmit} className="ui form error">
//         </form>
//       )}
//     />
//   );
// };
 
// export default StreamForm;

import React from "react";
import LanguageContext   from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english'? 'Submit': 'Voorleggen';
    }

    render() {
        console.log(this.context);
        return (
            <ColorContext>
                {(color) => 
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext>
        );
    }
}

export default Button;
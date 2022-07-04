import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    
    const [open, setOpen] = useState(false); // states to control if the dropdown is active or not
    const ref = useRef();

    useEffect(() => { // run this only at first render. adds an event listener to listen to clicks anywhere on the body
        
        const onBodyClick = (event) => {
            // for every click, if the click was inside the Dropdown portion, then return nothing (ie dont carry on the below stuffs).
            if (ref.current.contains(event.target)) {
                return;
            };

            console.log('1 BODY CLICK!')
            setOpen(false); // this will close our dropdown by setting our state of dropdown to 'close'
        } // this will allow opening the dropdown. uses event capturing instead.
                
        document.body.addEventListener('click', onBodyClick, {capture: true});
        console.log('TOGGLE ON');

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
            console.log('TOGGLE OFF');
        };

    }, []);

    const renderedOptions = options.map((option) => {
        // if one of the dropdowns is the one being shown now, then don't render it in the dropdown.
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div key={option.value} className="item" onClick={() => {console.log('2 ITEM CLICK!'); onSelectedChange(option);}}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => {console.log('3 DROPDOWN CLICK!'); setOpen(!open)}}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;
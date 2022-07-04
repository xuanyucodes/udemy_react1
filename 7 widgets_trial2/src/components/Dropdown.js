import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false); // the state if the dropdown is open or not
    const ref = useRef();

    useEffect(() => { // listens to the body element. only executes at start. 3 args: click, arrow_fn to change "open", and allow capture phase
        
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) { // if the click occurred inside ref, return nth and exit fn.
                return;
            }
            setOpen(false)
        };
        
        console.log("adding");
        document.body.addEventListener('click', onBodyClick, {capture: true});

        // cleanup fn when Dropdown is removed
        return () => {
            console.log("removing");
            document.body.removeEventListener('click', onBodyClick, {capture: true}); // remove listener watching for that click
        }
    }, []);

    // method to handle rendering of the list
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) { return null }; // if alr selected, dont render it
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;
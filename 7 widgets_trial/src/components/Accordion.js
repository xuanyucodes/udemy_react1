import React, {useState} from 'react';

const Accordion = ({items}) => {

    // to initialise a new piece of state
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        console.log('Title clicked', index);
        setActiveIndex(index);
    };

    // the onClick() needs to remain as an arrow fn or else it'll be called when parsed.
    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : ''; // the activeIndex is the index that was clicked. if it is, then it is active, and it should be added as CSS later.

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}> 
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    )
};

export default Accordion;
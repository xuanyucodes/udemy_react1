import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [ // for Accordion
    {title: 'What is React?', content: 'React is a front end javascript framework'},
    {title: 'Why use React?', content: 'React is a favourite JS library among engineers'},
    {title: 'How do you use React?', content: 'You use React by creating components'}
];

const options = [ // for Dropdown
    {label: 'The Color Red', value: 'red'},
    {label: 'The Color Green', value: 'green'},
    {label: 'A Shade of Blue', value: 'blue'}
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header/>
            <Route path ="/">
                <Accordion items={items} />
            </Route>
            <Route path ="/list">
                <Search />
            </Route>
            <Route path ="/dropdown">
                <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
                {showDropdown? <Dropdown label="Select a Colour" options={options} selected={selected} onSelectedChange={setSelected}/> : null}
            </Route>
            <Route path ="/translate">
                <Translate/>
            </Route>
        </div>
    )
};
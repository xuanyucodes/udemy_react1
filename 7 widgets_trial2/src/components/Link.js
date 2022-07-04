import React from 'react';

const Link = ({className, href, children}) => {
    
    // function that runs when Link is clicked
    const onClick = (event) => {

        // if CTRL + click, open in new tab instead (dont need run below the if block)
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault(); // prevents page rel oad
        window.history.pushState({}, '', href); // edits the URL bar you see in the browser

        // what does this do? dunnid to know. just know it somehow tells the world that the URL has just changed.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    
    return (
        <a 
        onClick={onClick}
        className={className} 
        href={href}>
            {children}
        </a>
    )
};

export default Link;
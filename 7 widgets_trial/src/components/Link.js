import React from 'react';

const Link = ({className, href, children}) => {
    
    const onClickHelperFn = (event) => {

        if (event.metaKey || event.ctrlKey) { // for mac or windows versions respectively. so if these keys were held down while the Link was clicked, return nth. by default, the browser will then recognise the ctrl+click and auto open in new tab.
            return;
        }

        event.preventDefault(); // whenever user clicks on an anchor element, disable full page reloads
        window.history.pushState({}, '', href); // edits the URL in the bar (but does not do anything else - no loading or fetching etc.)

        // purpose of this code is to tell those navigation Route components that some data has just changed (eg URL changed)
        // basically to allow each Route to detect that the URL has changed
        const navEvent = new PopStateEvent('popstate'); // actually 'popstate' can be named anything. in essence, popstate runs when the window's history changes.
        window.dispatchEvent(navEvent); // invokes the callback PopStateEvent (ie just calls/runs it)
    };

    return (
    <a className={className} href={href} onClick={onClickHelperFn}>{children}</a>
    );
};

export default Link;
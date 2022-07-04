// import React from 'react';
// no need import because we never write any JSX
import { useEffect, useState } from "react";

// since a <Component/> is a children of Route, it is the prop called children
const Route = ({path, children}) => {
    // purpose is to track the current path and get Route to update
    const [currentPath, setCurrentPath] = useState(window.location.pathname); 

    // only run at initial render to set up a listener, that listens to whenever URL changes. if so, executes onLC().
    useEffect(() => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => { // clean up listener if Route component not showing anymore
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
};

export default Route;
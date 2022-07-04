import {useEffect, useState} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname); // purpose is just to follow the URL and trigger rerendering if it changes

    // to just add the popstate event listener
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null; // for each Route is its path the same as the URL? if yes, render; if no, null.
};

export default Route;
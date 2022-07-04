import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// a custom hook to search for a list of youtube videos
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items); 
    };

    return [videos, search];
};

export default useVideos;
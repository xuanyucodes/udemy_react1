import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    // defining state
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    // this uE() takes care of watching if term changes or not, which then affects the other state.
    // if term changes, wait for 1000ms. if interrupt, repeat wait for a new 1000ms. after 1000ms, change debounceterm's state to the latest term, causing a rerender.
    useEffect(() => {

        // only run if a term exists. if empty, do nothing at all.
        if (term) {
            const timerId = setTimeout(() => {
                setDebouncedTerm(term);
            }, 1000);
    
            // the cleanup function
            return () => {
                clearTimeout(timerId);
            };
        };
        
    }, [term]);

    // we only want the below to run when first render OR debouncedterm is updated
    // useeffect: first arg is a function (either arrow or normal) that will run based on some scenario; second arg is either 3 scenarios - an empty array, an array w one or more elements, or nothing
    // we use this method to handle async functions, because the first arg of uE() cannot write async directly.
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            
            setResults(data.query.search);
        };

        search();
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={e => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                    {renderedResults}
                </div>
        </div>
    )
};

export default Search;
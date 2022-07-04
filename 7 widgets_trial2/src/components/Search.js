import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming'); // to set up the states using useState
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]); // for the search results

    // // this code block is if 'term' changes, send a request to Wiki, and then save the results into 'results' 
    // // calls useEffect(argumentToRun, thing)
    // // with the second arg, it means even after rerendering, only if "term" changes, then this fn will run
    // useEffect(() => {
    //     const search = async () => {
    //         const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
    //         { params: {
    //             action: 'query',
    //             list: 'search',
    //             origin: '*',
    //             format: 'json',
    //             srsearch: term
    //         }});
    //         setResults(data.query.search);
    //     };

    //     if (term && !results.length) { // if there is a term and no results (aka at initial render)
    //         search();
    //     } else { // for the searches after the initial render
    //         // if a new letter is typed, wait 500ms before searching
    //         const timeoutId = setTimeout(() => {
    //             if (term) {search();}
    //         }, 1000);

    //         // return the cleanup function here, which will remove the timer if rerenders
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [term]);

    // the above commented out code is having both in one uE(), but it has its weaknesses. we do the below 2 uE()s 
    // instead with the debounced term
    // first uE() runs at first render OR if "term" changes, itll set a timer that runs after 1000ms to change "debouncedTerm" to "term"
    // returns a cleaner function to clear the timer if term changes (ie typing more letters)
    useEffect(() => {
        const timerId = setTimeout(() => { setDebouncedTerm(term);}, 1000);
        return () => {clearTimeout(timerId);}
    }, [term])

    // second uE() runs at first render OR if "debouncedTerm" changes. just to make the search.
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',
            { params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debouncedTerm
            }});
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm])

    // display the 'results' list
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated column">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;
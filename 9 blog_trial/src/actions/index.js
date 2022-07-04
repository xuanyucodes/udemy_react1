import jsonPlaceholder from '../apis/jsonPlaceholder';

// end of the day, we are just defining a function that returns a function.
export const fetchPosts = () => async dispatch => { // can also write getState inside the arg. but as of now, only 1 arg is used which is dispatch.
        const response = await jsonPlaceholder.get('/posts'); // get the data
        dispatch({type: 'FETCH_POSTS', payload: response}) // once the above finishes (in async await, will execute line by line), dispatch the data to the reducers (store)
    };
        // // when using redux thunk, we wont be returning actions from any inner functions anymore. instead, we want to be returning functions.
        // // when we are returning a function and want to dispatch an action we can instead call the dispatch() manually with the action
        // // actually we dont really care about what the inner function returns if it's an obj or fn; it is the OUTER FUNCTION that we care that should return a function.
        // return {
        //     type: 'FETCH_POSTS', payload: response
        // };
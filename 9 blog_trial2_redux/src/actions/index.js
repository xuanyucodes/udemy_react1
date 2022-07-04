import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

// below is same as above!
// export const fetchPosts = () => {
//     return async dispatch => {
//         const response = jsonPlaceholder.get('/posts');
//         dispatch({type: 'FETCH_POSTS', payload: response});
//     };
// };

// non-memoized version
export const fetchUser = (id) => async dispatch =>{
    const response = await jsonPlaceholder(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};

//// memoized version
// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('About to fetch posts!')
    await dispatch(fetchPosts()); // get the list of posts and update store. await ensures the variable stores the response only after the request is done.
    console.log('Fetched posts!')
    // console.log(getState().posts);

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};
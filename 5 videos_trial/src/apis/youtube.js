import axios from 'axios';

const KEY = 'AIzaSyCyT6pH9qId4dpJ0XEvGHXKqtG_ip6tX3Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
import axios from 'axios';

// the create() method will create an instance of the axios client w a couple of defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wGAk3BBleSpJMXZALlEQQ6KF986LiBmaQa4wpBiH9fM'
    }
});
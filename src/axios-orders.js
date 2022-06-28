import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-dac5a-default-rtdb.firebaseio.com/'
});

export default instance;
import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID bVJqgfnPnZdkKkOjC8_STDK4tugg2BXzWgjnSanVgdc'
    }
});
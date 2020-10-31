import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID k6TObmhvbBbDV9x4WE4Aro-LO3WsDW4X2XjKlCZAbYE'
    }
})
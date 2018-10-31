import axios from 'axios';

// Add a request interceptor
const isLocal = true;

let axiosInstance = axios.create({
    baseURL: 'api',
});


axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //If the header does not contain the token and the url not public, redirect to login
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response);
    if (response.data['message']){
        messageToShow.next(response.data['message']);
    }
    switch (response.status) {
        case 200:
            return response.data ? response.data : true;
        default :
            console.log('unknwon error');
            return response
    }
}, function (error) {
    // Do something with response error
    console.log(error.response, error.response);
    if (error.response) {
        switch (error.response.status) {
            case 401 :
                return Promise.reject(error);
            default :
                console.log('Mauvaise requete');
                return Promise.reject(error);
        }
    } else {
        console.log('Impossible to log in ');
        return Promise.reject(error);
    }
});

console.log(axiosInstance);

export default axiosInstance
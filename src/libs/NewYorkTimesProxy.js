const BASE_PATH = '/svc/books/v3/';
const NY_TIMES_API_KEY = process.env.REACT_APP_NY_TIMES_API_KEY;

export const getBookGenre = () => {
    return fetch(`https://api.nytimes.com${BASE_PATH}lists/names.json?api-key=${NY_TIMES_API_KEY}`)
        .then(response => response.json())
        .then(responseData => responseData)
        .catch(res => res);
};

export const getBookListInGenre = (listName) => {
    return fetch(`https://api.nytimes.com${BASE_PATH}lists.json?api-key=${NY_TIMES_API_KEY}&list=${listName}`)
        .then(response => response.json())
        .then(
            (result) => result);
};
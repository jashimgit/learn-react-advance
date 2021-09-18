import axios from 'axios';

export function getPosts() {
    return new Promise((resolve, reject) => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => resolve(response.data))
            .catch(err => reject(err))
    })
}

export function getComments(id) {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
    })
}
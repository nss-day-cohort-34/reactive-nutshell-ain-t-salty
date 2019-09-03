const remoteURL = "http://localhost:5002"
export default {
    getUsersData () {
    return fetch(`${remoteURL}/users`)
        .then(response => response.json())
},

    getUser (id) {
    return fetch(`${remoteURL}/users/${id}`)
        .then(response => response.json())
}
}
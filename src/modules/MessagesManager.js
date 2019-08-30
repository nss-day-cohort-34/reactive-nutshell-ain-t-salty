const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/messages/${id}`)
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/messages`)
            .then(result => result.json())
    },
    delete(id) {
        return fetch(`http://${remoteURL}/messages/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      }
}
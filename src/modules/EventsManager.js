const remoteURL = "http://localhost:5002"

export default {
  getEvent(id) {
    return fetch(`${remoteURL}/Events/${id}`).then(result => result.json())
  },
  getAllEvents() {
    return fetch(`${remoteURL}/Events`).then(result => result.json())
  },
  deleteEvent(id) {
    return fetch(`${remoteURL}/Events${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}
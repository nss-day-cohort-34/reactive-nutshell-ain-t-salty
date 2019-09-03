const remoteURL = "http://localhost:5002"

export default {
    getEvent(id) {
        return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
    },
    getAllEvents() {
        return fetch(`${remoteURL}/events`).then(result => result.json())
    },
    deleteEvent(id) {
        return fetch(`${remoteURL}/events/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    updateEvent(editedEvent) {
        return fetch(`${remoteURL}/events/${editedEvent.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEvent)
        }).then(data => data.json());
    },
    postEvent(newEvent) {
        return fetch(`${remoteURL}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        }).then(data => data.json())
    }

}
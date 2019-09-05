const remoteURL = "http://localhost:5002"

export default {

  get(id) {
    return fetch(`${remoteURL}/tasks/?userId=${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(result => result.json())
  },

  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(data => data.json())
},

update(editedTask) {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    }).then(data => data.json());
  },

// update(checkedTask) {
//     return fetch(`${remoteURL}/tasks/${checkedTask}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(this.checkedTask.id)
//       }).then(data => data.json());
//     },

    delete(id) {
      return fetch(`http://localhost:5002/tasks/${id}`, {
          method: "DELETE"
      })
      .then(result => result.json())
    }

}


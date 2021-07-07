const remoteURL = "http://localhost:5002"

export default {

    getArticle(id) {
        return fetch(`${remoteURL}/news/${id}`).then(result => result.json())
    },
    getAllArticles(userId) {
        return fetch(`${remoteURL}/news?userId=${userId}`).then(result => result.json())
    },
    deleteArticle(id) {
        return fetch(`http://localhost:5002/news/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },
    postArticle(newArticle) {
        return fetch(`${remoteURL}/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        }).then(data => data.json())
    },
    updateArticle(editedArticle) {
        return fetch(`${remoteURL}/news/${editedArticle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedArticle)
        }).then(data => data.json());
    }
}
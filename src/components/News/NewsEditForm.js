import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"


class NewsEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        synopsis: "",
        URL: "",
        loadingStatus: true
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedArticle = {
        id: this.props.match.params.articleId,
        title: this.state.title,
        synposis: this.state.synopsis,
        URL: this.state.URL
      };

      NewsManager.updateArticle(editedArticle)
      .then(() => this.props.history.push("/news"))
    }

    componentDidMount() {
      NewsManager.getArticle(this.props.match.params.articleId)
      .then(article => {
          this.setState({
            title: article.title,
            synopsis: article.synopsis,
            URL: article.URL,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="title">Title</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="synopsis"
                value={this.state.synopsis}
              />
              <label htmlFor="synopsis">Synopsis</label>

              <input 
                type="URL"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="URL"
                value={this.state.URL}
              />
              <label htmlFor="URL">URL</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingArticle}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default NewsEditForm
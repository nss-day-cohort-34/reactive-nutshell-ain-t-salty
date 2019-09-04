import React, { Component } from 'react';
import NewsManager from '../../modules/NewsManager';


class NewsForm extends Component {
    state = {
        title: "",
        synopsis: "",
        URL: "",
        timestamp: "",
        loadingStatus: false
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewArticle = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.synopsis === "" || this.state.url === "") {
            window.alert("Please complete all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const timestamp = new Date().toLocaleString()
            const article = {
                title: this.state.title,
                synopsis: this.state.synopsis,
                URL: this.state.URL,
                timestamp: timestamp
            };

            // Create the article and redirect user to article list
            NewsManager.postArticle(article)
            .then(() => this.props.history.push("/news"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Title"
                        />
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="synopsis"
                        placeholder="Synopsis"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input 
                        type="url"
                        required
                        onChange={this.handleFieldChange}
                        id="URL"
                        placeholder="URL"
                        />
                        <label htmlFor="URL">URL</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default NewsForm
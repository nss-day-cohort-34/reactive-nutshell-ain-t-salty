import React, { Component } from 'react'
//import the components we will need
import NewsCard from './NewsCard';
import NewsManager from '../../modules/NewsManager';

class NewsList extends Component {
    //define what this component needs to render
    state = {
        articles: [],
    }
    loggedInUser = parseInt(sessionStorage.getItem("credentials"))

    componentDidMount() {
        console.log("NEWS LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        // NewsManager.getAllArticles()

        NewsManager.getAllArticles(this.loggedInUser)
            .then((articles) => {
                this.setState({
                    articles: articles
                })
            })
    }

    deleteArticle = id => {
        NewsManager.deleteArticle(id)
            .then(() => {
                NewsManager.getAllArticles(this.loggedInUser)
                    .then((newArticle) => {
                        this.setState({
                            articles: newArticle
                        })
                    })
            })
    }

    render() {
        console.log("NewsList: Render");

        return (
            <React.Fragment>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/news/new") }}>
                        Enter News Article
                </button>
                </section>
                <div className="container-cards">
                    {this.state.articles.map(article =>
                        <NewsCard
                            key={article.id}
                            article={article}
                            deleteArticle={this.deleteArticle}
                            {...this.props}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}


export default NewsList

// const timestamp = new Date().toLocaleString()
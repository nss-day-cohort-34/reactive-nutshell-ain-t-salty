// How a single article will look on the page.
import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>Title: {this.props.article.title}</p>
          <p>Synopsis: {this.props.article.synopsis}</p>
          <p><a href={this.props.article.URL}>{this.props.article.URL}</a></p>
          {/* <p><Timestamp date={Date} /></p> */}
          <button type="button" onClick={() => this.props.deleteArticle(this.props.article.id)}>Delete</button>
          <button type="button" onClick={() => {this.props.history.push(`/news/${this.props.article.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default NewsCard;

// const timestamp = new Date().toLocaleString()


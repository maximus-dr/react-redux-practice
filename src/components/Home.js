import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../avatar.jpg';


export default class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data.slice(0, 10)
        })
      })
  }

  render() {

    const { posts } = this.state;
    const postsList = posts.length
      ? posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <Link to={`/${post.id}`} className="post__link" >
              <img src={Avatar} alt="user"/>
              <div className="card-content">
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </div>
            </Link>
          </div>
        );
      })
      : <div className="center">No posts yet</div>

    return (
      <div className="container home">
        <h4 className="center">Home Page</h4>
        {postsList}
      </div>
    );
  }
}

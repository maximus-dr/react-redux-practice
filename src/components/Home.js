import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../avatar.jpg';


class Home extends Component {

  render() {

    const { posts } = this.props;
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
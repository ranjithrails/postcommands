import React, { Component } from 'react';
import NewPost from'./containers/createpost'
import PostList from './containers/PostList';

// import React, { Component } from 'react';
// import CreatePost from './containers/CreatePost';
// import PostList from './containers/PostList';

import './App.css';
const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="row" style={ stylesApp }>
        <div className="col-md-6">
          <NewPost />
        </div>
        <div className="col-md-6">
        <PostList />

        </div>
      </div>
    </div>
    );
  }
}

export default App;

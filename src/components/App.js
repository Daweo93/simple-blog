import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostsIndex from '../containers/postIndex';
import PostsNew from "../containers/postsNew";
import PostDetails from "../containers/postDetails";

class App extends Component {
  render() {
    return (
      <div className="row">
        <BrowserRouter>
          <div className="w-100 row">
            <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/posts/:id" component={PostDetails} />
              <Route path="/" component={PostsIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

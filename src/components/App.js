import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './postIndex';

class App extends Component {
  render() {
    return (
      <div className="row">
        <BrowserRouter>
          <div>
            <Route path="/" component={PostsIndex} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

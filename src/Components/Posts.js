import React, { Component } from "react";

// This page is to pull many posts from database

class Posts extends Component {
      render() {
        return (
          <div>
            <h2>This component returns many Post objects</h2>
            <p>We will either find a way or make one.</p>
            <ol>
              <li>In here we will pull many posts from postgresql rails api</li>
            </ol>
          </div>
        );
      }
    }
     
    export default Posts;
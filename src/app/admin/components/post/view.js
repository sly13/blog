import React, { Component } from "react";
import renderHTML from "react-render-html";
import { getPost } from "../../../../action";

class PostView extends Component {
  state = {
    post: {}
  };

  componentWillMount() {
    console.log("here", this.props.match.params.slug);
    getPost(this.props.match.params.slug)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("post", this.state.post);
    const { title, subText, text } = this.state.post;
    //const { id } = this.props.match.params;

    return (
      <>
        <h1>View Post</h1>
        <br />
        {title && renderHTML(title)}
        <br />
        {subText && renderHTML(subText)}
        {text && renderHTML(text)}
      </>
    );
  }
}

export default PostView;

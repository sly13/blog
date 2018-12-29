import React, { Component } from "react";
import { withRouter } from "react-router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "react-images-upload";

import { createPost } from "../../../../action";

class PostCreate extends Component {
  state = {
    title: "",
    subText: "",
    text: "",
    posts: {},
    pictures: []
  };

  onDrop = picture => {
    console.log(this.state.pictures.concat(picture));
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  };

  onHandleChangeSubText = e => {
    this.setState({ subText: e });
    console.log(this.state.subText);
  };

  onHandleChangeText = e => {
    this.setState({ text: e });
    console.log(this.state.text);
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const post = {
      categoryId: 2,
      title: this.state.title,
      subText: this.state.subText,
      text: this.state.text
    };

    createPost(post)
      .then(response => {
        this.props.history.push("/post-list");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log(post);
    //database.push(post);
    this.setState({
      title: "",
      subText: "",
      text: ""
    });
  };

  render() {
    return (
      <div className="container">
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />

        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              ref="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <ReactQuill
              modules={PostCreate.modules}
              formats={PostCreate.formats}
              value={this.state.subText}
              placeholder="subText"
              onChange={this.onHandleChangeSubText}
            />
            <ReactQuill
              modules={PostCreate.modules}
              formats={PostCreate.formats}
              value={this.state.text}
              placeholder="text"
              onChange={this.onHandleChangeText}
            />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
        <br />
      </div>
    );
  }
}

PostCreate.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};

PostCreate.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

export default withRouter(PostCreate);

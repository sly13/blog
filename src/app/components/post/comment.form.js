import React, { Component } from "react";

class CommentForm extends Component {
  state = {};
  render() {
    return (
      <div className="comments-form">
        <h3 className="title-normal">Leave a comment</h3>

        <form role="form">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control required-field"
                  id="message"
                  placeholder="Your Comment"
                  rows="10"
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Your Website"
                  type="text"
                  required
                />
              </div>
            </div>
          </div>
          <div className="clearfix">
            <button className="comments-btn btn btn-primary" type="submit">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;

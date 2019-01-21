import React, { Component } from "react";
import { createSubscriber } from "../../../action";

class Newsletter extends Component {
  state = {
    email: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    createSubscriber({ email: this.state.email })
      .then(response => {
        //todo not update email
        this.setState({
          email: "",
          message: "Вы успешно оформили подписку!"
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="widget m-bottom-0">
        <h3 className="block-title">
          <span>Рассылка</span>
        </h3>
        <div className="ts-newsletter">
          <div className="newsletter-introtext">
            <h4>Обновления</h4>
            <p>
              Подпишитесь на обновления и получайте свежие статьи на вашу почту
            </p>
          </div>

          <div className="newsletter-form">
            <form action="#" method="post" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="newsletter-form-email"
                  className="form-control form-control-lg"
                  placeholder="Укажите ваш email"
                  autoComplete="off"
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <div>{this.state.message}</div>
                <button className="btn btn-primary">Подписаться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;

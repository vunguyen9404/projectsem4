import React, { PureComponent } from 'react';


class SignIn extends PureComponent {

  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    let login = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(login);
    window.location.replace('/dashboard');
  };

  render() {
    return (
      <div className="login-form">
        <div className="row min-h-fullscreen center-vh p-20 m-0">
          <div className="col-12">
            <div className="card card-shadowed px-50 py-30 w-400px mx-auto"
                 style={{ maxWidth: '100%' }}>
              <h5 className="text-uppercase">Sign in</h5>
              <form className="form-type-material" onSubmit={this.handleLogin}>
                <div className="form-group">
                  <input type="text"
                         className="form-control"
                         id="username"
                         name="username"
                         value={this.state.username}
                         onChange={this.handleChange}
                         placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="password"
                         className="form-control"
                         id="password"
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange}
                         placeholder="Password"/>
                </div>
                <div className="form-group flexbox flex-column flex-md-row">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox"
                           className="custom-control-input"
                           checked={false}/>
                    <span className="custom-control-indicator"/>
                    <span className="custom-control-description">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="form-group">
                  <button className="btn btn-bold btn-block btn-primary"
                          type="submit">Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <footer className="col-12 align-self-end text-center fs-13">
            <p className="mb-0">
              <small>Copyright © 2018</small>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}


export default SignIn;

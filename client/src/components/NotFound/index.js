import React, { PureComponent } from 'react';


class NotFound extends PureComponent {
  render() {
    return (
      <div className="row no-margin" style={{ paddingTop: '10%' }}>
        <div className="col-12">
          <div className="card card-transparent mx-auto text-center">
            <h1 className="text-secondary lh-1"
                style={{ fontSize: 200 }}>404</h1>
            <hr className="w-30px"/>
            <h3 className="text-uppercase">Page not found!</h3>
            <p className="lead">Seems you're looking for something that doesn't
              exist.</p>
            <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center fs-14">
              <li className="nav-item">
                <a className="nav-link" href="#">Report problem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Return home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default NotFound;

import React, { PureComponent } from 'react';


class InternalServer extends PureComponent {
  render() {
    return (
      <div className="row no-margin" style={{ paddingTop: '10%' }}>
        <div className="col-12">
          <div className="card card-transparent mx-auto text-center">
            <h1 className="text-secondary lh-1"
                style={{ fontSize: 200 }}>500</h1>
            <hr className="w-30px"/>
            <h3 className="text-uppercase">Internal server error</h3>
            <p className="lead">Looks like we have an internal issue, please try
              again in couple of minutes.</p>
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


export default InternalServer;

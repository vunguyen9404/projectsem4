import React, { PureComponent } from 'react';


class UserList extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-6 col-md-6 col-lg-4 col-xl-3">
          <div className="card card-body">
            <div className="flexbox align-items-center">
              <label className="toggler toggler-yellow fs-16">
                <input type="checkbox"/>
                <i className="fa fa-star"/>
              </label>
              <div className="dropdown">
                <a data-toggle="dropdown" href="">
                  <i className="ti-more-alt rotate-90 text-muted"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-user"/> Profile
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-comments"/> Messages
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-phone"/> Call
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-remove"/> Remove
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center pt-3">
              <a href="">
                <img className="avatar avatar-xxl"
                     src="../assets/img/avatar/1.jpg"/>
              </a>
              <h5 className="mt-3 mb-0">
                <a className="hover-primary" href="">Diamond</a>
              </h5>
              <span>Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-4 col-xl-3">
          <div className="card card-body">
            <div className="flexbox align-items-center">
              <label className="toggler toggler-yellow fs-16">
                <input type="checkbox"/>
                <i className="fa fa-star"/>
              </label>
              <div className="dropdown">
                <a data-toggle="dropdown" href="">
                  <i className="ti-more-alt rotate-90 text-muted"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-user"/> Profile
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-comments"/> Messages
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-phone"/> Call
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-remove"/> Remove
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center pt-3">
              <a href="">
                <img className="avatar avatar-xxl"
                     src="../assets/img/avatar/1.jpg"/>
              </a>
              <h5 className="mt-3 mb-0">
                <a className="hover-primary" href="">Diamond</a>
              </h5>
              <span>Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-4 col-xl-3">
          <div className="card card-body">
            <div className="flexbox align-items-center">
              <label className="toggler toggler-yellow fs-16">
                <input type="checkbox"/>
                <i className="fa fa-star"/>
              </label>
              <div className="dropdown">
                <a data-toggle="dropdown" href="">
                  <i className="ti-more-alt rotate-90 text-muted"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-user"/> Profile
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-comments"/> Messages
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-phone"/> Call
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-remove"/> Remove
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center pt-3">
              <a href="">
                <img className="avatar avatar-xxl"
                     src="../assets/img/avatar/1.jpg"/>
              </a>
              <h5 className="mt-3 mb-0">
                <a className="hover-primary" href="">Diamond</a>
              </h5>
              <span>Teacher</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-4 col-xl-3">
          <div className="card card-body">
            <div className="flexbox align-items-center">
              <label className="toggler toggler-yellow fs-16">
                <input type="checkbox"/>
                <i className="fa fa-star"/>
              </label>
              <div className="dropdown">
                <a data-toggle="dropdown" href="">
                  <i className="ti-more-alt rotate-90 text-muted"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-user"/> Profile
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-comments"/> Messages
                  </a>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-phone"/> Call
                  </a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item"
                     href=""><i className="fa fa-fw fa-remove"/> Remove
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center pt-3">
              <a href="">
                <img className="avatar avatar-xxl"
                     src="../assets/img/avatar/1.jpg"/>
              </a>
              <h5 className="mt-3 mb-0">
                <a className="hover-primary" href="">Diamond</a>
              </h5>
              <span>Teacher</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default UserList;

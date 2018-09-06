import React, { PureComponent } from 'react';


class TopMenu extends PureComponent {
  render() {
    return (
      <header className="topbar">
        <div className="topbar-left">
          <button className="topbar-btn sidebar-toggler">&#9776;</button>
          <h3 className="topbar-title">Dashboard</h3>
        </div>
        <div className="topbar-right">
          <ul className="topbar-btns">
            <li className="dropdown">
              <span className="topbar-btn" data-toggle="dropdown">
                <img className="avatar avatar-sm"
                     src="../assets/img/avatar/1.jpg"
                     alt="..."/>
              </span>
            </li>
            <li className="dropdown">
              <span className="topbar-btn has-new"
                    data-toggle="dropdown">
                <i className="ti-bell"/>
              </span>
            </li>
            <div className="dropdown">
              <span className="topbar-btn" data-toggle="dropdown">
                <img className="icon"
                     src="../assets/img/flag/en.png"
                     alt="en"/>
                English
              </span>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item active" href="">
                  <img className="icon"
                       src="../assets/img/flag/en.png"
                       alt="..."/>
                  English
                </a>
              </div>
            </div>
          </ul>
        </div>
      </header>
    );
  }
}


export default TopMenu;

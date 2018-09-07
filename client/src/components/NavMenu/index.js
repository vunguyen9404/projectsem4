import React, { PureComponent } from 'react';
import { Link }                 from 'react-router-dom';


class NavMenu extends PureComponent {
  render() {
    return (
      <aside className="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg">
        <header className="sidebar-header">
          <img className="logo-icon"
               src="../assets/img/logo-icon-light.png"
               alt="..."/>
          <span className="logo">
            <img src="../assets/img/logo-light.png" alt="..."/>
          </span>
        </header>
        <nav className="sidebar-navigation">
          <ul className="menu">
            <li className="menu-category">Menu</li>
            <li className="menu-item">
              <Link className="menu-link" to="/dashboard">
                <span className="icon fa fa-home"/>
                <span className="title">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/prize">
                <span className="icon fa fa-home"/>
                <span className="title">Prize</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/user-list">
                <span className="icon fa fa-home"/>
                <span className="title">User List</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/add-user">
                <span className="icon fa fa-home"/>
                <span className="title">Add User</span>
              </Link>
            </li>
            {/*<li className="menu-item active">*/}
            {/*<a className="menu-link" href="">*/}
            {/*<span className="icon fa fa-home"/>*/}
            {/*<span className="title">Dashboard</span>*/}
            {/*</a>*/}
            {/*</li>*/}
          </ul>
        </nav>
      </aside>
    );
  }
}


export default NavMenu;

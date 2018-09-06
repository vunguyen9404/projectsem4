import React, { PureComponent } from 'react';


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
            <li className="menu-item active">
              <a className="menu-link" href="">
                <span className="icon fa fa-home"/>
                <span className="title">Dashboard</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}


export default NavMenu;

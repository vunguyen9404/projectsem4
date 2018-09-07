import React, { PureComponent } from 'react';


class Dashboard extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <h4 className="card-title">
              <strong>Competition</strong>
            </h4>
            <div className="card-body">
              <div className="flexbox mb-20">
                <div className="lookup">
                  <input className="w-300px"
                         type="text"
                         name="s"
                         placeholder="Search"/>
                </div>
                <div className="btn-toolbar">
                  <div className="btn-group btn-group-sm">
                    <button className="btn"
                            title="Refresh"
                            data-provide="tooltip">
                      <i className="ion-refresh"/>
                    </button>
                    <button className="btn"
                            title="Add new"
                            data-provide="tooltip">
                      <i className="ion-plus-round"/>
                    </button>
                  </div>
                </div>
              </div>
              <table className="table">
                <thead>
                <tr>
                  <th>#</th>
                  <th>Competition</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Practice 1</td>
                  <td>PENDING</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Practice 2</td>
                  <td>RESOLVE</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard;

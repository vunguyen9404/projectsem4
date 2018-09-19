import React, { PureComponent } from 'react';


class Competition extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form className="card">
            <h4 className="card-title"><strong>Competition</strong></h4>
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4"
                         className="col-form-label">Start Date</label>
                  <input type="email"
                         className="form-control"
                         id="inputEmail4"
                         placeholder="01/01/2019"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"
                         className="col-form-label">End Date</label>
                  <input type="password"
                         className="form-control"
                         id="inputPassword4"
                         placeholder="01/01/2020"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress"
                       className="col-form-label">Name Competition</label>
                <input type="text"
                       className="form-control"
                       id="inputAddress"
                       placeholder="Practice"/>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2"
                       className="col-form-label">Requirement</label>
                <input type="text"
                       className="form-control"
                       id="inputAddress2"
                       placeholder="Apartment, studio, or floor"/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity"
                         className="col-form-label">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState"
                         className="col-form-label">State</label>
                  <select id="inputState" className="form-control">
                    <option>California</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>Texas</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip"
                         className="col-form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
              </div>
            </div>
            <footer className="card-footer text-right">
              <button className="btn btn-secondary" type="reset">Cancel</button>
              {' '}
              <button className="btn btn-primary" type="submit">Submit</button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}


export default Competition;


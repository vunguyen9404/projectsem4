import React, { PureComponent } from 'react';


class AddUser extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <form className="card">
            <h4 className="card-title"><strong>Register</strong></h4>
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4"
                         className="col-form-label">Username</label>
                  <input type="email"
                         className="form-control"
                         id="inputEmail4"
                         placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"
                         className="col-form-label">Password</label>
                  <input type="password"
                         className="form-control"
                         id="inputPassword4"
                         placeholder="Password"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress"
                       className="col-form-label">Address</label>
                <input type="text"
                       className="form-control"
                       id="inputAddress"
                       placeholder="1234 Main St"/>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2"
                       className="col-form-label">Address 2</label>
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
              {/*<div className="form-group">*/}
              {/*<label className="custom-control custom-checkbox mr-3">*/}
              {/*<input type="checkbox" className="custom-control-input"/>*/}
              {/*<span className="custom-control-indicator"/>*/}
              {/*<span className="custom-control-description">I agree to terms and conditions.</span>*/}
              {/*</label>*/}
              {/*</div>*/}
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


export default AddUser;

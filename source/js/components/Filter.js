import React, { Component } from 'react';

class Filter extends Component {
  handleChange = event => {
    const { onChange } = this.props;
    const { target: { value } } = event;

    onChange(value);
  }

  getCompanyOptions = companies => {
    return companies.map(company => (
      <option value={company} key={company}>{company}</option>
    ));
  }

  render() {
    const { companies } = this.props;
    const options = this.getCompanyOptions(companies);

    return (
      <div className="filter">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="company">Company:</label>
          </div>
          <div className="form-group">
            <select
              onChange={this.handleChange}
              className="form-control input-lg"
              id="company"
            >{options}</select>
          </div>
        </form>
      </div>
    );
  }
};

module.exports = Filter;

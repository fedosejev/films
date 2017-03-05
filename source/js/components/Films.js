import React, { Component } from 'react';
import Film from './Film';
import Footer from './Footer';
import Filter from './Filter';

class Films extends Component {
  renderFilms = films => {
    return films.map(film => (
      <Film film={film} key={film.name} />
    ));
  }

  handleFilterChange = company => {
    const { filter } = this.props;

    filter(company);
  }

  render() {
    const {
      companies,
      films,
      filterBy
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            
            <Filter
              companies={companies}
              onChange={this.handleFilterChange}
            />

            <div className="films">
              {this.renderFilms(films)}
            </div>

            <Footer />

          </div>
        </div>
      </div>
    );
  }
}

module.exports = Films;

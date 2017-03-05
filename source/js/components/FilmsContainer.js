import { connect } from 'react-redux';

import {
  filter
} from '../actions/filter';

import Films from './Films';

const mapStateToProps = ({ companies, films, filterBy }) => ({
  companies,
  films,
  filterBy
});

const mapDispatchToProps = dispatch => ({
  filter: value => (
    dispatch(filter(value))
  )
});

const FilmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);

export default FilmsContainer;

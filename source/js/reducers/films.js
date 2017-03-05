import { FILTER } from '../actions/filter';
import { getCompanies } from '../utils/films';
import films from '../../data/films.json';

const ALL_COMPANIES = 'All';

const initialState = {
  companies: getCompanies(films),
  films,
  filterBy: ALL_COMPANIES
};

const filterFilms = companyName => {
  if (companyName === ALL_COMPANIES) {
    return films;
  }

  return films.filter(({ company }) => company === companyName)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FILTER:
      const filterBy = action.value;
      const films = filterFilms(filterBy);
      const { companies } = state;

      return {
        companies,
        films,
        filterBy,
      };

    default:
      return state;
  }
};

export default reducer;

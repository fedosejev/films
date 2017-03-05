function getCompanies(films) {
  const companies = ['All'];

  films.map(({ company }) => {
    if (companies.indexOf(company) === -1) {
      companies.push(company);
    }
  });

  return companies;
}

module.exports = {
  getCompanies,
};

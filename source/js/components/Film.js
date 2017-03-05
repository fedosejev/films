import React from 'react';

const Film = ({ film: { name, company, url, image }}) => (
  <div className="row film">
    <div className="col-sm-4">
      <img src={image} title={`${name} by ${company}`} alt={`${name} by ${company}`} />
    </div>
    <div className="col-sm-8">
      <p>
        <strong>Name:</strong> <a href={url}>{name}</a>
      </p>
      <p>
        <strong>Company:</strong> <a href={url}>{company}</a>
      </p>
    </div>
  </div>
);

module.exports = Film;

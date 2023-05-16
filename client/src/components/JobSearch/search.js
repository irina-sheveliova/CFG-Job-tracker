import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationQuery, setLocationQuery] = useState(''); // State for location query
  const [radiusQuery, setRadiusQuery] = useState(''); // State for radius query
  const [resultCount, setResultCount] = useState(0); // State for result count


  const searchJsearch = async (event) => {
    event.preventDefault();
  
    try {
      const location = locationQuery ? ` within ${radiusQuery}km of ${locationQuery}` : '';
      const queryParam = `${query}${location}`;
      console.log(queryParam);

      const response = await axios.get(`https://jsearch.p.rapidapi.com/search`, {
        headers: {
          'X-RapidAPI-Key': 'c9f0d150camsh7d9406b60fc5d1ep17996djsna932e8fb918c',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          query: queryParam,
          page: currentPage,
          num_pages: 10
        }
      });
  
      setResults(response.data.data);
      setResultCount(response.data.total_count);
    } catch (error) {
      console.error(error);
    }
  }
  

  const handleLocationChange = (event) => {
    setLocationQuery(event.target.value);
  }

  const handleRadiusChange = (event) => {
    setRadiusQuery(event.target.value);
  }

  return (
    <div>
     <h2 id="search-title">Unleash Your Career Potential with <span id="jobflow-text">JobFlow</span></h2>
     <h2 id= "sub-search-title">Find Your <span id="Dream-sub">Dream</span> Job Today!</h2>
      <form id = "jobsearch-form" onSubmit={searchJsearch}>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Job, Company, Keywords" />
        <button type="submit">Search</button>
        <div id="location-filter">
          <label>Location:</label>
          <input type="text" placeholder="City, State, or Postcode" value={locationQuery} onChange={handleLocationChange} />
          <label>Radius(KM):</label>
          <select value={radiusQuery} onChange={handleRadiusChange}>
            <option value="">Select Radius</option>
            <option value="5">5 </option>
            <option value="10">10 </option>
            <option value="25">25 </option>
            <option value="50">50 </option>
            <option value="75">75 </option>
            <option value="100">100  +</option>
          </select>
        </div>
      </form>


     <div id="results-container">
      <p id="result-count">Results found: {results.length}</p>
        {results.map((result, index) => (
          <div key={result.job_id} className={`result-box fade-in ${index >= (currentPage - 1) * 9 && index < currentPage * 10 ? '' : 'hide'}`}>
            <h2>{result.job_title}</h2>
            <p className="location" id="location-{result.job_id}">Location: {result.location}, {result.job_country}</p>
            <p>Company Website: <a href={result.employer_website} target="_blank" rel="noreferrer">{result.employer_website}</a></p>
            <p id="Applynow"><a href={result.job_apply_link} target="_blank" rel="noreferrer">Apply Now</a></p>
            <p>{result.job_description.substring(0, 500)}...</p>
            <p id="Remote">Remote Working: {result.job_is_remote ? 'Yes' : 'No'}</p>
            <p id="JobPosted">Job Posted Date: {new Date(result.job_posted_at_timestamp * 1000).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;



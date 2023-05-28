import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultCount, setResultCount] = useState(0); // State for result count


  const searchJsearch = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get(`https://jsearch.p.rapidapi.com/search`, {
        headers: {
          'X-RapidAPI-Key': '', // <-- enter Rapid API key here
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          query: query,
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
  

  return (
    <div className='full-search-form'>
     <h2 id="search-title">Unleash Your Career Potential with <span id="jobflow-text">JobFlow</span></h2>
     <h2 id= "sub-search-title">Find Your <span id="Dream-sub">Dream</span> Job Today!</h2>
      <form id = "jobsearch-form" onSubmit={searchJsearch}>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Please Enter The Desired Job Title and Location e.g. Software Engineer in London" />
        <button type="submit">Search</button>
      </form>


     <div id="results-container">
      <p id="result-count">Results found: {results.length}</p>
        {results.map((result, index) => (
          <div key={result.job_id} className={`result-box fade-in ${index >= (currentPage - 1) * 9 && index < currentPage * 10 ? '' : 'hide'}`}>
            <h2>{result.job_title}</h2>
            <p className="location" id="location-{result.job_id}">Location: {result.job_city}, {result.job_country}</p>
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




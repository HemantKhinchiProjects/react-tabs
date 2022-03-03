import React, { useState, useEffect } from 'react';
import './style.css';
const url = 'https://course-api.com/react-tabs-project';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="selection loading">
        <h1>loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jon-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setValue(index);
                }}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <svg
                  className="job-icon"
                  height="15px"
                  width="15px"
                  id="Layer_1"
                  style="enable-background:new 0 0 64 64;"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <g
                      id="Icon-Arrow-Left"
                      transform="translate(28.000000, 328.000000)"
                    >
                      <path
                        class="st0"
                        d="M4-272.1c-13.2,0-23.9-10.7-23.9-23.9S-9.2-319.9,4-319.9s23.9,10.7,23.9,23.9     S17.2-272.1,4-272.1L4-272.1z M4-317.3c-11.7,0-21.3,9.6-21.3,21.3s9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3S15.7-317.3,4-317.3     L4-317.3z"
                        id="Fill-25"
                      />
                      <polyline
                        class="st0"
                        id="Fill-26"
                        points="3.5,-282.3 1.7,-284.2 13.4,-296 1.7,-307.8 3.5,-309.7 17.2,-296 3.5,-282.3    "
                      />
                      <polygon
                        class="st0"
                        id="Fill-27"
                        points="15.3,-294.6 -8.7,-294.6 -8.7,-297.4 15.3,-297.4    "
                      />
                    </g>
                  </g>
                </svg>

                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

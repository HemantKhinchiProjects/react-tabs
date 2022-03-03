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
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map(
            (duty,
            (index) => {
              return (
                <div key={index} className="job-desc">
                  <svg
                    height="25px"
                    id="Layer_1"
                    style="enable-background:new 0 0 512 512;"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="25px"
                  >
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                  <p>{duty}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

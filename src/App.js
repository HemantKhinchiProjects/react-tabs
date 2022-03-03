import React, { useState, useEffect } from 'react';
import './style.css';
const url = 'https://course-api.com/react-tabs-project';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const featchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    featchJobs();
  }, []);
  if (loading) {
    return (
      <section className="selection loading">
        <h1>loading...</h1>
      </section>
    );
  }
  return <main> job </main>;
}

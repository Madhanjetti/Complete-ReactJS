 React component that uses axios to fetch data from an API.

Example: Fetching Data with Axios
Install Axios:
First, you need to install axios if you haven't already. You can do this by running:

npm install axios

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosDataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>
    </div>
  );
};

export default AxiosDataFetcher;

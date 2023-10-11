// src/useAxios.js
import { useState } from 'react';
import axios from 'axios';

function useAxios(baseURL) {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(`${baseURL}${url}`);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return [data, fetchData];
}

export default useAxios;

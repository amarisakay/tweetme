import React, { useState, useCallback } from 'react';
import axios from './axios';
import { ENDPOINT } from './routes';

const Api = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const useApi = useCallback(async (method, endpoint, payload) => {
    try {
      let response;
      switch (method) {
        case 'GET':
          if (endpoint === ENDPOINT.getAllTweets) {
            const tweetsResponse = await axios.get(endpoint);
            const usersResponse = await axios.get(ENDPOINT.getAllUsers);
            const usersById = {};
            usersResponse.data.forEach(user => {
              usersById[user.id] = user;
            });
            const tweetsWithUsersData = tweetsResponse.data.map(tweet => ({
              ...tweet,
              user: usersById[tweet.authorId]
            }));
            setData(tweetsWithUsersData);
          } else {
            const response = await axios.get(endpoint);
            setData(response.data);
          }
          break;
        case 'POST':
          response = await axios.post(endpoint, payload);
          if (response.status === 200) {
            setData(prevData => [...prevData, response.data]);
          }
          break;
        case 'PUT':
          response = await axios.put(endpoint, payload);
          const updatedData = data.map(item =>
            item.id === payload.id ? { ...item, ...payload } : item
          );
          setData(updatedData);
          break;
        case 'DELETE':
          await axios.delete(endpoint);
          const filteredData = data.filter(item => item.id !== payload.id);
          setData(filteredData);
          break;
        default:
          throw new Error('Méthode HTTP non gérée');
      }
    } catch (error) {
      console.log('Erreur lors de la requête API:', error);
      setError(error);
    }
  }, [data]);

  return {
    useApi,
    data,
    error,
  };
};

export default Api;

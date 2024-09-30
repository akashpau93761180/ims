import axios from 'axios';

const apiCall = async (url = 'https://localhost:7218/', method = 'GET', data = null) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,  // Add token for authenticated requests
      },
    });
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

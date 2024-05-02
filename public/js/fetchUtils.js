async function fetchData(url) {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Failed to fetch data from the API.');
      throw new Error('API request failed');
    }
  }
  
  export { fetchData };
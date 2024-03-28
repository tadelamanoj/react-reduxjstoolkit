// api.js
export const fetchItems = async () => {
    // Simulate fetching data from an API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  
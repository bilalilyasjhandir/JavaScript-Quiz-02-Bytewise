function fetchData(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    }
    
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(url);  
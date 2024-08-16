async function fetchData(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Fetched data:", data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(url);  
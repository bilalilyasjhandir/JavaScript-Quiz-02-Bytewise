const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = JSON.parse(xhr.responseText);
    console.log("Response data:", response);
  } else {
    console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
  }
};
xhr.onerror = function() {
  console.error("Request failed");
};
xhr.send();
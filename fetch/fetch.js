/* The Fetch API provides an interface for fetching resources (including across the network).
It will seem familiar to anyone who has used XMLHttpRequest,
but the new API provides a more powerful and flexible feature set.
*/

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-type': 'application/json'
  };

  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    // custom error
    return response.json().then(error => {
      const e = new Error('Something went wrong...');
      e.data = error;
      throw e;
    });
  });
}

// sendRequest('GET', requestURL)
//   .then((data) => console.log(data))
//   .catch((data) => console.error(data));

const body = {
  name: 'John',
  age: 36,
};

sendRequest('POST', requestURL, body)
  .then((data) => console.log(data))
  .catch((data) => console.error(data));

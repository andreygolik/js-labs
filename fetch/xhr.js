const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
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

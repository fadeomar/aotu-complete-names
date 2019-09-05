const createXhr = (url, method, search, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = xhr.responseText;
        callback(data, xhr.status);
      } else if (xhr.readyState === 4) {
        callback(null, xhr.status);
      }
    });
    xhr.open(method, url);
    xhr.send(search);
  };
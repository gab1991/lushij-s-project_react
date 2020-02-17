const Backend = {
  loadData: function(offset = '0', limit = '5') {
    const url = `https://staffz.ru/api/announce-list?offset=${offset}&limit=${limit}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  },

  postData: function(data) {
    const url = 'https://www.staffz.ru/api/save-announce';
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Content-type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
};

export default Backend;

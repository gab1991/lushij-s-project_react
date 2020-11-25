import React, { useState, useEffect, forwardRef } from 'react';
import Backend from './Backend.js';
import Tr from './Tr.js';

export default forwardRef(function Thead(props, ref) {
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    getHeaders();
  }, []);

  async function getHeaders() {
    const data = await Backend.loadData();
    const headers = Object.keys(data.data[0]);
    const headersUpper = [];

    headers.forEach(header => {
      const headerUpper = header[0].toUpperCase() + header.slice(1);
      headersUpper.push(headerUpper);
    });

    setHeaders(headersUpper);
  }

  return (
    <thead ref={ref}>
      <Tr headers={headers} />
    </thead>
  );
});

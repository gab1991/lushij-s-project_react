import React, { useState, useEffect } from 'react';
import Backend from './Backend.js';
import Tr from './Tr.js';

export default function Tbody() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    countRowsToFetch();
  }, []);

  useEffect(() => {
    if (rows) getData(currentPage, rows);
  }, [rows]);

  useEffect(() => {
    if (currentData.length > 0) {
      const body = document.querySelector('tbody');
      if (body.children.length !== currentData.length) {
        console.warn('not all the rows are displayed');
      }
    }
  }, [currentData]);

  const countRowsToFetch = async () => {
    const theadHeight = 40;
    const rowHeight = 28;
    const thead = document.querySelector('thead');
    const tHeadDimensions = thead.getBoundingClientRect(); // Getting the size of the table
    const tOffsetAndHeight = tHeadDimensions.y;
    const freeSpaceBottom = 2 * rowHeight;
    const rowsToUpload = Math.floor(
      (window.innerHeight -
        (tOffsetAndHeight + theadHeight + freeSpaceBottom)) /
        rowHeight
    );
    setRows(rowsToUpload);
  };

  const getData = async (pageNumber, pageSize) => {
    const offset = (pageNumber - 1) * pageSize;
    const data = await Backend.loadData(offset, pageSize);
    if (data.data) {
      setCurrentData(data.data);
    } else {
      console.warn('data has not been fetched from the remote server');
    }
  };

  return (
    <tbody>
      {currentData.map(elm => (
        <Tr key={elm.id} data={elm} />
      ))}
    </tbody>
  );
}

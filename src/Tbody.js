import React, { useState, useEffect, useRef } from 'react';
import Backend from './Backend.js';
import Tr from './Tr.js';
import Pagination from './Pagination';

export default function Tbody({ theadRef }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [rows, setRows] = useState(0);
  const tbody = useRef();

  useEffect(() => {
    countRowsToFetch();
  }, []);

  useEffect(() => {
    if (rows) getData(currentPage, rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  useEffect(() => {
    if (currentData.length > 0) {
      if (tbody.current.children.length !== currentData.length) {
        console.warn('not all the rows are displayed');
      }
    }
  }, [currentData]);

  useEffect(() => {
    getData(currentPage, rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const countRowsToFetch = async () => {
    const theadHeight = 40;
    const rowHeight = 28;
    const thead = theadRef.current;
    const tHeadDimensions = thead.getBoundingClientRect();
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
      setTotalCount(data.totalCount);
    } else {
      console.warn('data has not been fetched from the remote server');
    }
  };

  return (
    <>
      <tbody ref={tbody}>
        {currentData.map(elm => (
          <Tr key={elm.id} data={elm} />
        ))}
      </tbody>
      <Pagination
        totalCount={totalCount}
        rowsPerPage={rows}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
      />
    </>
  );
}

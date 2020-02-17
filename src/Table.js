import React, { useState } from 'react';
import Backend from './Backend.js';
import Thead from './Thead.js';
import Tbody from './Tbody.js';

export default function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  //   Backend.loadData().then(res => console.log(res));

  //   async function countRowsToFetch() {
  //     const theadHeight = 40;
  //     const rowHeight = 28;
  //     const tableDimensions = table.getBoundingClientRect(); // Getting the size of the table
  //     const tOffsetAndHeight = tableDimensions.y;
  //     const freeSpaceBottom = 2 * rowHeight;
  //     const rowsToUpload = Math.floor(
  //       (window.innerHeight -
  //         (tOffsetAndHeight + theadHeight + freeSpaceBottom)) /
  //         rowHeight
  //     );
  //     return rowsToUpload;
  //   }

  return (
    <table className="content-table">
      <Thead />
      <Tbody />
    </table>
  );
}

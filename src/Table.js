import React from 'react';
import Thead from './Thead.js';
import Tbody from './Tbody.js';
import Pagination from './Pagination';

export default function Table() {
  return (
    <table className="content-table">
      <Thead />
      <Tbody />
      <Pagination />
    </table>
  );
}

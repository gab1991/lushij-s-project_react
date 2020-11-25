import React from 'react';
import Thead from './Thead.js';
import Tbody from './Tbody.js';

export default function Table(props) {
  const { currentData, tbodyRef, theadRef } = props;

  return (
    <table className="content-table">
      <Thead ref={theadRef} />
      <Tbody currentData={currentData} ref={tbodyRef} />
    </table>
  );
}

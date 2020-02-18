import React from 'react';
import Thead from './Thead.js';
import Tbody from './Tbody.js';

export default function Table() {
  return (
    <table className="content-table">
      <Thead />
      <Tbody />
    </table>
  );
}

import React, { useRef } from 'react';
import Thead from './Thead.js';
import Tbody from './Tbody.js';

export default function Table() {
  const thead = useRef();
  return (
    <table className="content-table">
      <Thead ref={thead} />
      <Tbody theadRef={thead} />
    </table>
  );
}

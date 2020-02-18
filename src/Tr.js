import React from 'react';
import uuid from 'react-uuid';
import Td from './Td.js';

export default function Tr(props) {
  const headers = props.headers || null;
  const tds = props.data || null;
  let content;

  if (headers) {
    content = headers.map(header => <th key={uuid()}>{header}</th>);
  } else {
    let tdData = Object.entries(tds);
    content = tdData.map(td => <Td key={uuid()} td={td} />);
  }
  return (
    <tr
      key={uuid()}
      // onFocus={e => {
      //   console.log('here', e.target);
      //   e.target.parentElement.classList.add('focus');
      // }}
      // onBlur={e => {
      //   console.log('here', e.target);
      //   e.target.parentElement.classList.remove('focus');
      // }}
    >
      {content}
    </tr>
  );
}

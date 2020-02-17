import React from 'react';
import Backend from './Backend.js';

export default function Tr(props) {
  const headers = props.headers || null;
  let content;
  if (headers) {
    content = headers.map(header => <th key={header}>{header}</th>);
  }

  return <tr>{content}</tr>;
}

import React, { useState, useEffect, useRef } from 'react';
import Text from './Text';
import uuid from 'react-uuid';

export default function Td(props) {
  return (
    <td key={uuid()} className={props.td[0]}>
      <Text data={props.td} />
    </td>
  );
}

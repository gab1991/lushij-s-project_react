import React, { useRef } from 'react';
import Text from './Text';
import uuid from 'react-uuid';

export default function Td(props) {
  const tdRef = useRef();
  return (
    <td ref={tdRef} key={uuid()} className={props.td[0]}>
      <Text data={props.td} fullTr={props.fullTr} tdRef={tdRef} />
    </td>
  );
}

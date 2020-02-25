import React, { useRef } from 'react';
import Text from './Text';

export default function Td(props) {
  const tdRef = useRef();
  return (
    <td ref={tdRef} className={props.td[0]}>
      <Text data={props.td} fullTr={props.fullTr} tdRef={tdRef} />
    </td>
  );
}

import React from 'react';
import uuid from 'react-uuid';

export default function Td(props) {
  let key = props.td[0];
  let value = props.td[1];

  const editableClasses = [
    'text',
    'type',
    'publishDate',
    'publishHour',
    'isPaid',
    'isDeleted'
  ];
  if (editableClasses.includes(key)) {
    value = (
      <span contentEditable={true} suppressContentEditableWarning={true}>
        {value}
      </span>
    );
  }

  return (
    <td key={uuid()} className={key}>
      {value}
    </td>
  );
}

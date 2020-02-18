import React, { useState } from 'react';
import SaveButton from './SaveButton';
import uuid from 'react-uuid';

export default function Td(props) {
  const [displaySaveButton, setDisplaySaveButton] = useState(false);
  const [dimensions, setDimensions] = useState();
  let key = props.td[0];
  let value = props.td[1];
  let txtContent = '';

  const setAttribute = (atrName, value) => {};

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
      <span
        contentEditable={true}
        suppressContentEditableWarning={true}
        onFocus={e => {
          e.target.parentElement.classList.add('focus');
          txtContent = e.target.textContent;
        }}
        onBlur={e => {
          e.target.parentElement.classList.remove('focus');
        }}
        onInput={e => {
          if (e.target.parentNode.querySelector('button')) return;
          e.target.removeAttribute('data-saved');

          setDimensions(e.target.parentNode.getBoundingClientRect());
          setDisplaySaveButton(true);
        }}
      >
        {value}
      </span>
    );
  }

  return (
    <td key={uuid()} className={key}>
      {value}
      {displaySaveButton && (
        <SaveButton dimensions={dimensions} setAttribute={setAttribute} />
      )}
    </td>
  );
}

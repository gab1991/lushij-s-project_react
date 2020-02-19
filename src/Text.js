import React, { useEffect } from 'react';

export default function Text({ data, showSaveButton }) {
  const editableClasses = [
    'text',
    'type',
    'publishDate',
    'publishHour',
    'isPaid',
    'isDeleted'
  ];

  if (editableClasses.includes(data[0])) {
    return (
      <span
        contentEditable={true}
        suppressContentEditableWarning={true}
        onFocus={e => {
          e.target.parentElement.classList.add('focus');
        }}
        onBlur={e => {
          e.target.parentElement.classList.remove('focus');
        }}
        onKeyDown={e => {
          showSaveButton(e);
        }}
      >
        {data[1]}
      </span>
    );
  } else {
    return <span>{data[1]}</span>;
  }
}

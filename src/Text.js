import React, { useState } from 'react';
import SaveButton from './SaveButton.js';

export default function Text({ data, fullTr }) {
  const editableClasses = [
    'text',
    'publishDate',
    'publishHour',
    'isPaid',
    'isDeleted'
  ];

  const [displaySaveButton, setDisplaySaveButton] = useState(false);
  const [dimensions, setDimensions] = useState();
  const [currentTxt, setCurrentTxt] = useState(data[1]);

  const hasEditableClass = editableClasses.includes(data[0]);

  const showSaveButton = e => {
    let dimensions = e.target.parentNode.getBoundingClientRect();
    setDimensions(dimensions);
    setDisplaySaveButton(true);
  };

  const hideSaveButton = e => {
    e.target.textContent = currentTxt;
    setDisplaySaveButton(false);
  };

  const saveTxt = e => {
    setCurrentTxt(e.target.previousSibling.textContent);
  };
  return (
    <>
      {hasEditableClass && (
        <span
          contentEditable={true}
          suppressContentEditableWarning={true}
          onFocus={e => {
            e.target.parentElement.classList.add('focus');
          }}
          onBlur={e => {
            e.target.parentElement.classList.remove('focus');
            hideSaveButton(e);
          }}
          onInput={e => {
            if (displaySaveButton) return;
            showSaveButton(e);
          }}
        >
          {currentTxt}
        </span>
      )}
      {!hasEditableClass && <span>{data[1]}</span>}
      <SaveButton
        displaySaveButton={displaySaveButton}
        dimensions={dimensions}
        saveTxt={saveTxt}
        fullTr={fullTr}
        fieldName={data[0]}
      />
    </>
  );
}

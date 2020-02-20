import React, { useState, useRef, useEffect } from 'react';
import SaveButton from './SaveButton.js';

export default function Text({ data }) {
  const editableClasses = [
    'text',
    'type',
    'publishDate',
    'publishHour',
    'isPaid',
    'isDeleted'
  ];

  const [displaySaveButton, setDisplaySaveButton] = useState(false);
  const [dimensions, setDimensions] = useState();
  const [dataSaved, setDataSaved] = useState(false); // question here
  const [currentTxt, setCurrentTxt] = useState(data[1]);

  const saveBtnRef = useRef();

  useEffect(() => {
    console.log(dataSaved);
  }, [dataSaved]);

  useEffect(() => {
    console.log(currentTxt);
  }, [currentTxt]);

  const hasEditableClass = editableClasses.includes(data[0]);

  const showSaveButton = e => {
    let dimensions = e.target.parentNode.getBoundingClientRect();
    setDataSaved(false);
    setDimensions(dimensions);
    setDisplaySaveButton(true);
  };

  const hideSaveButton = e => {
    e.target.textContent = currentTxt;
    setDisplaySaveButton(false);
  };

  const saveTxt = e => {
    setDataSaved(true);
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
        ref={saveBtnRef}
        dimensions={dimensions}
        saveTxt={saveTxt}
        fullTr={data}
        fieldName={data[0]}
        text={currentTxt}
      />
    </>
  );
}

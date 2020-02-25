import React, { useState, useRef, useEffect } from 'react';
import SaveButton from './SaveButton.js';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function Text({ data, fullTr }) {
  const editableClasses = ['text', 'publishHour', 'isPaid', 'isDeleted'];
  const dateClasses = ['publishDate'];

  const [displaySaveButton, setDisplaySaveButton] = useState(false);
  const [dimensions, setDimensions] = useState();
  const [currentTxt, setCurrentTxt] = useState(data[1]);
  const [publishDate, setPublishDate] = useState();
  const span = useRef();

  const hasEditableClass = editableClasses.includes(data[0]);
  const isDate = dateClasses.includes(data[0]);

  if (isDate && !publishDate) {
    if (data[1]) {
      const dateArr = data[1].split('-');
      let year = Number(dateArr[0]);
      let month = Number(dateArr[1]) - 1;
      let day = Number(dateArr[2]);
      setPublishDate(new Date(year, month, day));
    }
  }

  const showSaveButton = e => {
    let dimensions = e.target.parentNode.getBoundingClientRect();
    setDimensions(dimensions);
    setDisplaySaveButton(true);
  };

  const showDatePicker = e => {
    console.log('showing picker');
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
          ref={span}
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
            showDatePicker(e);
          }}
        >
          {currentTxt}
        </span>
      )}
      {isDate && <DatePicker selected={publishDate} />}
      {!hasEditableClass && !isDate && <span>{data[1]}</span>}
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

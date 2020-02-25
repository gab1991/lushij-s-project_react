import React, { useState, useRef } from 'react';
import SaveButton from './SaveButton.js';
import DatePicker from 'react-datepicker';
import Backend from './Backend.js';

import 'react-datepicker/dist/react-datepicker.css';

export default function Text({ data, fullTr, tdRef }) {
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
    if (data[1]) setPublishDate(new Date(data[1]));
  }

  const showSaveButton = e => {
    let dimensions = tdRef.current.getBoundingClientRect();
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

  const saveSelectedDate = date => {
    setPublishDate(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let day = date.getUTCDate();
    if (day < 10) day = `0${day}`;

    const sendObj = {
      id: fullTr.id,
      [data[0]]: `${day}.${month}.${year}`
    };

    (async function() {
      const sending = await Backend.postData(sendObj);
      console.log(sendObj, sending);
    })();
  };

  return (
    <>
      {hasEditableClass && (
        <span
          ref={span}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onFocus={e => {
            tdRef.current.classList.add('focus');
          }}
          onBlur={e => {
            tdRef.current.classList.remove('focus');
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
      {isDate && (
        <DatePicker
          selected={publishDate}
          dateFormat="dd-MM-yyyy"
          onChange={date => {
            saveSelectedDate(date);
          }}
          onCalendarOpen={() => {
            tdRef.current.classList.add('focus');
          }}
          onCalendarClose={() => {
            tdRef.current.classList.remove('focus');
          }}
        />
      )}
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

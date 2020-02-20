import React, { forwardRef, useState, useEffect } from 'react';
import Backend from './Backend.js';

export default forwardRef(function SaveButton(props, ref) {
  const isDisplayed = props.displaySaveButton;

  if (isDisplayed) {
    const top = `${props.dimensions.top}px`;
    const left = `${props.dimensions.left + props.dimensions.width}px`;
    const saveTxt = props.saveTxt;
    const id = props.fullTr.id;
    const fieldName = props.fieldName;
    return (
      <button
        ref={ref}
        className="saveBtn"
        style={{ top: top, left: left }}
        onMouseDown={e => {
          saveTxt(e);

          const sendObj = {
            id: id,
            [fieldName]: e.target.previousSibling.textContent
          };

          (async function() {
            const sending = await Backend.postData(sendObj);
            console.log(sendObj, sending);
          })();
        }}
      >
        Save Changes
      </button>
    );
  }
});

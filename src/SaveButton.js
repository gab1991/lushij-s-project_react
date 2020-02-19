import React, { forwardRef } from 'react';

export default forwardRef(function SaveButton(props, ref) {
  const isDisplayed = props.displaySaveButton;

  if (isDisplayed) {
    const top = `${props.dimensions.top}px`;
    const left = `${props.dimensions.left + props.dimensions.width}px`;
    const savedata = props.setdatasaved;
    const id = props.fullTr.id;
    const fieldName = props.fieldName;
    console.log(fieldName);

    return (
      <button
        ref={ref}
        className="saveBtn"
        style={{ top: top, left: left }}
        onMouseDown={() => {
          savedata('true');

          const sendObj = {
            id: id
            // [fieldName]: txtCont
          };
        }}
      >
        Save Changes
      </button>
    );
  }
});

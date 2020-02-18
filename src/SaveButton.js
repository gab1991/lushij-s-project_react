import React from 'react';

export default function SaveButton(props) {
  const top = `${props.dimensions.top}px`;
  const left = `${props.dimensions.left + props.dimensions.width}px`;

  return (
    <button
      className="saveBtn"
      style={{ top: top, left: left }}
      onMouseDown={() => {
        props.setAttribute('data-saved', true);
      }}
    >
      Save Changes
    </button>
  );
}

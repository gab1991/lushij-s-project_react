import React, { useState, useEffect, useRef } from 'react';
import SaveButton from './SaveButton';
import Text from './Text';
import uuid from 'react-uuid';

export default React.memo(function Td(props) {
  const [displaySaveButton, setDisplaySaveButton] = useState(false);
  const [dimensions, setDimensions] = useState();
  const [dataSaved, setDataSaved] = useState(null); // question here
  const [currentText, setCurrentText] = useState(props.td[1]); // question here
  const saveBtnRef = useRef();

  let key = props.td[0];
  let value = props.td[1];

  const showSaveButton = e => {
    let dimensions = e.target.parentNode.getBoundingClientRect();
    setDimensions(dimensions);
    setDisplaySaveButton(true);
  };

  return (
    <td key={uuid()} className={key}>
      <Text data={props.td} showSaveButton={showSaveButton} />
      <SaveButton
        displaySaveButton={displaySaveButton}
        ref={saveBtnRef}
        dimensions={dimensions}
        setdatasaved={setDataSaved}
        fullTr={props.fullTr}
        fieldName={key}
        text={value}
      />
    </td>
  );
});

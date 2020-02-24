import React, { forwardRef } from 'react';
import Tr from './Tr.js';

export default forwardRef(function Tbody(props, ref) {
  const { currentData } = props;
  return (
    <>
      <tbody ref={ref}>
        {currentData.map(elm => (
          <Tr key={elm.id} data={elm} />
        ))}
      </tbody>
    </>
  );
});

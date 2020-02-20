import React, { useRef } from 'react';
import uuid from 'react-uuid';

export default function Pagination({
  rowsPerPage,
  totalCount,
  currentPage,
  changeCurrentPage
}) {
  let pageCount = Math.ceil(totalCount / rowsPerPage);
  let activeBtn = useRef();
  let buttons = [];

  const buttonClick = e => {
    const lastPage = buttons.length - 2;
    const leftArrow = e.target.getAttribute('data-page') === '<<';
    const rightArrow = e.target.getAttribute('data-page') === '>>';

    if (leftArrow && currentPage !== 1) {
      changeCurrentPage(currentPage - 1);
    } else if (leftArrow && currentPage === 1) {
      changeCurrentPage(1);
    } else if (rightArrow && currentPage !== lastPage) {
      changeCurrentPage(currentPage + 1);
    } else if (rightArrow && currentPage === lastPage) {
      changeCurrentPage(lastPage);
    } else {
      changeCurrentPage(Number(e.target.getAttribute('data-page')));
    }
  };

  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 && pageCount > 1) {
      buttons.push(
        <button key={uuid()} data-page={'<<'} onClick={buttonClick}>
          {'<<'}
        </button>
      );
    }
    if (currentPage === i) {
      buttons.push(
        <button
          ref={activeBtn}
          className="active"
          key={uuid()}
          data-page={i}
          onClick={buttonClick}
        >
          {i}
        </button>
      );
    } else {
      buttons.push(
        <button key={uuid()} data-page={i} onClick={buttonClick}>
          {i}
        </button>
      );
    }
    if (i === pageCount && pageCount > 1) {
      buttons.push(
        <button key={uuid()} data-page={'>>'} onClick={buttonClick}>
          {'>>'}
        </button>
      );
    }
  }

  return <div className="pagination">{buttons}</div>;
}

import React from 'react';

export default function Pagination({
  rowsPerPage,
  totalCount,
  currentPage,
  changeCurrentPage
}) {
  let pageCount = Math.ceil(totalCount / rowsPerPage);
  let buttons = [];

  const buttonClick = e => {
    const lastPage = buttons.length;
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
    buttons.push(
      <button
        key={i}
        className={currentPage === i ? 'active' : null}
        data-page={i}
        onClick={buttonClick}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination">
      {pageCount > 1 && (
        <button data-page={'<<'} onClick={buttonClick}>
          {'<<'}
        </button>
      )}
      {buttons}
      {pageCount > 1 && (
        <button data-page={'>>'} onClick={buttonClick}>
          {'>>'}
        </button>
      )}
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPgaeChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPgaeChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit); //51/10 = 5.1 ---> 6

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };
  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Pre
      </button>

      <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

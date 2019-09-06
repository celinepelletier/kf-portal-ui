import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import StyleWrapper from './Table/StyleWrapper';
import CustomPagination from './Pagination';
import applyTransforms from './utils/applyTransforms';

class ControlledDataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pageSize: props.pageSize || props.defaultPageSize || 20,
    };
  }

  render() {
    const {
      loading = false,

      data,
      transforms = [],
      columns,

      // styling-related stuff
      className = '',
      striped = true,
      style = {},

      // pagination-related stuff
      showPagination = true,
      manualPagination = true,
      defaultPageSize = 20,
      dataTotalCount = -1,
      onFetchData = () => null,
    } = this.props;

    // pagination-related stuff
    const { pageSize } = this.state;
    const totalRows = Math.max(dataTotalCount, data ? data.length : 0);
    const pages = Math.ceil(totalRows / pageSize);

    return (
      <StyleWrapper style={{ ...style, borderRight: 'none' }}>
        <ReactTable
          columns={columns}
          loading={loading}
          data={applyTransforms(data || [], transforms)}
          manual={manualPagination}
          showPagination={showPagination}
          pages={pages}
          defaultPageSize={defaultPageSize}
          onFetchData={state => {
            this.setState({
              page: state.page,
              pageSize: state.pageSize,
            });
            onFetchData(state);
          }}
          PaginationComponent={CustomPagination}
          className={`${className} ${striped ? '-striped' : ''}`}
          minRows={1} // hide empty rows
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                style: {
                  background: rowInfo.row.selected ? '#edf9fe' : '',
                },
              };
            } else {
              return {};
            }
          }}
        />
      </StyleWrapper>
    );
  }
}

ControlledDataTable.propTypes = {
  loading: PropTypes.bool,
  // see ReactTable v6 Columns doc: https://github.com/tannerlinsley/react-table/tree/v6#columns
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
      accessor: PropTypes.string.isRequired,
      Cell: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    }),
  ).isRequired,
  data: PropTypes.array.isRequired,
  dataTotalCount: PropTypes.number.isRequired,
  manualPagination: PropTypes.bool,
  onFetchData: PropTypes.func,
  transforms: PropTypes.arrayOf(PropTypes.func),
  className: PropTypes.string,
};

export default ControlledDataTable;

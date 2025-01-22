import React from 'react';
import DataTable from '../../../src/index';

const PaginatedTable = ({ title, columns, data }) => (
  <DataTable title={title} columns={columns} data={data} pagination />
);

export default PaginatedTable;

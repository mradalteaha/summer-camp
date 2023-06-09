import React from 'react';
import {utils,write} from 'xlsx';
import { saveAs } from 'file-saver';

const TableExportButton = ({ tableId, fileName }) => {
  const handleExport = () => {
    const table = document.getElementById(tableId);
    const workbook = utils.table_to_book(table);
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, `${fileName}.xlsx`);
  };

  return <button onClick={handleExport}>Export as Excel</button>;
};

export default TableExportButton;

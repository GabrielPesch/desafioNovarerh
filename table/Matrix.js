export default class Matrix {
  constructor (tableSize = 1000, columns = 4, rowsPerPage = 50)
  {
    this._tableSize = tableSize;
    this._columns = columns;
    this._rowsPerPage = rowsPerPage;
    this._matrixArray = [];
  }

  generateMatrixArray() {
    throw new Error('Method not implemented.');
  }

  printMatrix() {
    let pageOffset = 1;
    let pageNumber = 1;

    while(pageOffset <= this._tableSize) {
      console.log("Page", pageNumber);
      this.printPage(pageOffset);
      pageNumber += 1;
      pageOffset += this._rowsPerPage * this._columns
    }
  }

  printPage(pageOffset) {
    for (let rowIndex = pageOffset; 
      rowIndex <= pageOffset + this._rowsPerPage - 1;
      rowIndex += 1 ) {
      this.printRows(rowIndex);
    }
  }

  printRows(rowOffset) {
    let row = [];
    for(
      let columnIndex = 0; 
      columnIndex <= this._columns - 1;
      columnIndex += 1) {
        if(rowOffset + columnIndex * this._rowsPerPage <= this._tableSize) {
          row.push(this._matrixArray[rowOffset + columnIndex * this._rowsPerPage]);
        }
      }
      console.log(row.join('|'));
  }
}
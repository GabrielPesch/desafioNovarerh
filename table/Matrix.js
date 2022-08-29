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
    throw new Error('Method not implemented.');
  }
}
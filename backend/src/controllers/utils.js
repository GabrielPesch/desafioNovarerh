const sinon = require('sinon');

const makeRes = () => {
  const res = {
    status: sinon.stub().callsFake(() => res),
    json: sinon.stub().returns(),
    sendStatus: sinon.stub().returns(),
  };
  return res;
};

const listMock = [
  {
    "jogadorA": "Murray",
    "jogadorB": "Nadal"
  }
]

module.exports = {
  makeRes,
  listMock,
};
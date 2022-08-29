const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const db = require('../../../database/connection');
const matchesModel = require('../../../models/matchesModel');

chai.use(chaiAsPromised);

describe('models/matchesModel', () => {
  beforeEach(sinon.restore);

  describe('list', ()  => {
    it('Should thrown an Error if "db.execute" is rejected', () => {
      sinon.stub(db, 'execute').rejects();
      return chai.expect(matchesModel.list()).to.eventually.be.rejected;
    });

    it('Should return a list if "db.execute" resolves', () => {
      sinon.stub(db, 'execute').resolves([1]);
      return chai.expect(matchesModel.list()).to.eventually.be.deep.equal(1)
    });
  });
});
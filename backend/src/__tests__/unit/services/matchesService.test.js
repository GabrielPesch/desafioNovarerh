const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const matchesModel = require('../../../models/matchesModel');
const matchesService = require('../../../services/matchesService');

chai.use(chaiAsPromised);

describe('services/matchesService', () => {
  beforeEach(sinon.restore);

  describe('list', () => {
    it('Should thrown an Error if "matchesModel.list" thrown an error', () => {
      sinon.stub(matchesModel, 'list').rejects();
      return chai.expect(matchesService.list()).to.eventually.be.rejected;
    });

    it('Should return a list if "matchesModel.list" resolves', () => {
      sinon.stub(matchesModel, 'list').resolves([]);
      return chai.expect(matchesService.list()).to.eventually.deep.equal([]);
    }); 
  });
});
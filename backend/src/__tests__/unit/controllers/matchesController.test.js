const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const {makeRes, listMock} = require('./utils');
const matchesService = require('../../../services/matchesService');
const matchesController = require('../../../controllers/matchesController');

chai.use(chaiAsPromised);



describe('controllers/matchesController', () => {
  beforeEach(sinon.restore);

  describe('list', () => {

    it('Should thrown an Error if "matchesService.list" is rejects', () => {
      sinon.stub(matchesService, 'list').rejects();
      return chai.expect(matchesController.list({}, {})).to.eventually.be.rejected;
    });

    it('Should return status 200', async () => {
      const res = makeRes();
      sinon.stub(matchesService, 'list').resolves(listMock);

      await matchesController.list({}, res);
      return chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    });

    it('Should return a list', async () => {
      const res = makeRes();
      sinon.stub(matchesService, 'list').resolves(listMock);

      await matchesController.list({}, res);
      return chai.expect(res.json.getCall(0).args[0]).to.deep.equal(listMock);
    });
  });
});
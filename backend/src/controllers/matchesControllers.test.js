const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const {makeRes, listMock} = require('./utils');
const matchesService = require('../../../services/matchesService');
const matchesControllers = require('../../../controllers/matchesControllers');

chai.use(chaiAsPromised);



describe('controllers/matchesController', () => {
  beforeEach(sinon.restore);

  describe('list', () => {

    it('Deve disparar um erro se matchesService.list disparar um erro', () => {
      sinon.stub(matchesService, 'list').rejects();
      return chai.expect(matchesControllers.list({}, {})).to.eventually.be.rejected;
    });

    it('Deve chamar o status 200', async () => {
      const res = makeRes();
      sinon.stub(matchesService, 'list').resolves(listMock);

      await matchesControllers.list({}, res);
      return chai.expect(res.status.getCall(0).args[0]).to.equal(200);
    });

    it('Deve retornar a lista', async () => {
      const res = makeRes();
      sinon.stub(matchesService, 'list').resolves(listMock);

      await matchesControllers.list({}, res);
      return chai.expect(res.json.getCall(0).args[0]).to.deep.equal(listMock);
    });
  });
});
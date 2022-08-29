const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../app');
const { listMock } = require('../unit/controllers/utils');
const db = require('../../database/connection');

chai.use(chaiHttp);
const { expect } = chai;

describe ('Matches', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('list', () => {
    beforeEach(() => {
      sinon.stub(db, 'execute').resolves([listMock]);
    });

    it('Should return status 200',async () => {
      const response = await chai.request(app)
      .get('/matches');

      expect(response.status).to.equal(200) 
    });

    it('Should return a list of matches', async () => {
      const response = await chai.request(app)
      .get('/matches');

      expect(response.body).to.deep.equal(listMock) 
    }); 
  });
})
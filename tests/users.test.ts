import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from "../src/server";

chai.use(chaiHttp);
const expect = chai.expect;


describe('baseRoute', () => {
  it('should have a message prop', () => {
    it('Should return all user', function (done) {
      chai.request(app)
        .get('/')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Welcome Api Boilerplate Typescript Express');
          done();
        })
    })

  });

});
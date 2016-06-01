var should = require('should');
var seneca = require('seneca');

var provisionerMiddleware = require('../provisioner-middleware');

describe('Basic Acknowledgement Flow', function() {
  var tournamentId = Math.random()*1378481293;

  var p1Id = Math.random()*118238,p1Middleware,p1Socket;
  var p2Id = Math.random()*118238,p2Middleware,p2Socket;
  var p3Id = Math.random()*118238,p3Middleware,p3Socket;

  it('Setup Client Middleware for P1', function(done) {
    var count = 0;

    var p1SocketMock = {};
    p1SocketMock.emit = function(msgKey,obj) {
      msgKey.should.be.exactly('tournamentQueue');
      obj.should.have.property('msg');
      obj.msg.should.be.exactly('wait');
      done();
    };

    var p1Middleware = seneca();
    p1Middleware.use(getProvisionerMiddleware(p1Id,tournamentId,p1SocketMock));
    p1Middleware.act('role:joinTournament,tournamentId:' + tournamentId, function(err, response) {
      response.should.have.property('answer');
      response.answer.should.be.exactly('success');
      count.should.be.exactly(1);
      count++;
    });
  });
});

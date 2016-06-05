var should = require('should');
var seneca = require('seneca');

describe('Messaging with Seneca Redis Transport', function() {
  var sumMicroservicePlugin;
  var productMicroservicePlugin;

  it('Define Sum Microservice Plugin', function() {
    sumMicroservicePlugin = function() {
      this.add('role:math,cmd:sum', function(msg, respond) {
        return respond(null, {answer: msg.left + msg.right});
      });
    }
  });

  it('Test Sum Microervice Plugin', function(done) {
    var sumMicroservice = seneca();
    sumMicroservice.use(sumMicroservicePlugin);
    sumMicroservice.act('role:math,cmd:sum,left:2,right:3', function(err, response) {
      if(err) { return done(err); }
      response.should.have.property('answer');
      response.answer.should.be.exactly(5);
      done();
    });
  });

  it('Define Product Microservice Plugin', function() {
    productMicroservicePlugin = function() {
      this.add('role:math,cmd:product', function(msg, respond) {
        return respond(null, {answer: msg.left * msg.right});
      });
    };
  });

  it('Test Product Microservice Plugin', function(done) {
    var productMicroservice = seneca();
    productMicroservice.use(productMicroservicePlugin);
    productMicroservice.act('role:math,cmd:product,left:2,right:3', function(err, response) {
      if(err) { return done(err); }
      response.should.have.property('answer');
      response.answer.should.be.exactly(6);
      done();
    });
  });

  it('Test Uni-Directional Messaging over Redis', function(done) {
    var sumListenerMicroservice = seneca();
    sumListenerMicroservice.use(sumMicroservicePlugin);
    sumListenerMicroservice.use('redis-transport');
    sumListenerMicroservice.listen({type:'redis',pin:'role:math,cmd:sum'});

    var productListenerMicroservice = seneca();
    productListenerMicroservice.use(productMicroservicePlugin);
    productListenerMicroservice.use('redis-transport');
    productListenerMicroservice.listen({type:'redis',pin:'role:math,cmd:product'});

    var sumClientMicroservice = seneca();
    sumClientMicroservice.use('redis-transport');
    sumClientMicroservice.client({type:'redis',pin:'role:math,cmd:*'});

    sumListenerMicroservice.ready(function() {
      productListenerMicroservice.ready(function() {
        sumClientMicroservice.ready(function() {
          sumClientMicroservice.act('role:math,cmd:sum,left:2,right:3', function(err, response) {
            if(err) { return done(err); }
            response.should.have.property('answer');
            response.answer.should.be.exactly(5);

            sumClientMicroservice.act('role:math,cmd:product,left:2,right:3', function(err, response) {
              if(err) { return done(err); }
              response.should.have.property('answer');
              response.answer.should.be.exactly(6);
              sumListenerMicroservice.close(function(err) {
                if(err) { return done(err); }
                productListenerMicroservice.close(function(err) {
                  if(err) { return done(err); }
                  sumClientMicroservice.close(function(err) {
                    if(err) { return done(err); }
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  it('Broadcasting over Redis Transport', function(done) {
    var subscriber1 = seneca(), subscriber1Called=false;
    var subscriber2 = seneca(), subscriber2Called=false;
    var publisher = seneca();

    subscriber1.add('role:math', function(msg) {
      subscriber1Called = true;
      if(subscriber2Called) { return done(); }
    });
    subscriber1.use('redis-transport');
    subscriber1.listen({type:'redis',pin:'role:math'});

    subscriber2.add('role:math', function(msg) {
      subscriber2Called = true;
      if(subscriber1Called) { return done(); }
    });
    subscriber2.use('redis-transport');
    subscriber2.listen({type:'redis',pin:'role:math'});

    publisher.use('redis-transport');
    publisher.client({type:'redis',pin:'role:math'});

    subscriber1.ready(function() {
      subscriber2.ready(function() {
        publisher.ready(function() {
          publisher.act('role:math,left:2,right:3', function(err) {
            if(err) { return done(err); }
          });
        });
      });
    });
  });
});

require('seneca')()
  .use('redis-transport')
  .add('foo:one',function(args,done){ done(null,{bar:args.bar}) })
  .client()
  .listen({type:'redis',pin:'foo:one,bar:*'})
  .act('foo:two,bar:3',console.log);

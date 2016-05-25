require( 'seneca' )()

  .use( 'sum' )

  // listen for role:math messages
  // IMPORTANT: must match client
  .listen({type:'tcp',pin:'role:math'})

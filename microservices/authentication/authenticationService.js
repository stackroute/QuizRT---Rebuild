var seneca = require('seneca')();

seneca  .use('auth-plugin')
        .use('mesh',{auto:true,pin:'role:authentication'});

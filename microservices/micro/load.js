var seneca = require('seneca')()
            .use('data')
            .use('entity')
            .use('mongo-store',{
              name:'quizRT4',
              host:'127.0.0.1',
              port:27017
            });

  seneca.act('role:topics,action:retrieve',console.log)

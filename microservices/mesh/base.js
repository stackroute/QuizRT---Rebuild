require('seneca')()

           .use("mongo-store", {
                               name: "quizart",
                               host: "127.0.0.1",
                               port: "27017"
                             }
               )
              .use('entity')
        .use('../question/service/question')
        .use('mesh',{base:true,pin:'role:question'});

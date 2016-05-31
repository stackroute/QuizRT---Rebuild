var seneca = require('seneca');

baseMicroservice = seneca();
baseMicroservice.use('mesh', {base:true});

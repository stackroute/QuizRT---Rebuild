function questionAPI(options)
{

this.add('role:question,action:getQuestions',function(msg,respond){
  this.act('role:question,action:all', respond);
})

this.add('init:api',function(msg,respond){
  this.act('role:web',{
    use:{
      prefix:'/api/questions',
      pin: 'role:question,action:*',
      map:{
        getQuestions:{GET:true}
      }
    }
  })
  respond()
})
}

module.exports = questionAPI;

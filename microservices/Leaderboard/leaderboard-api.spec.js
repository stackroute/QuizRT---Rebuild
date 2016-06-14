var seneca = require('seneca')();
var should = require ('should');

var data = {
  gameId : 145,
  scores : [
    {
      "name" : "Shikhar",
      "score" : 20
    },
    {
      "name" : "Arjun",
      "score" : 30
    },
    {
      "name" : "Karan",
      "score" : 25
    }
  ]
}

seneca.use('mongo-store', {
  name: 'quizRT4',
  host: '127.0.0.1',
  port: 27017
});
seneca.use('entity');
seneca.use('./leaderboard-api');
seneca.use('mesh',{auto:true,pin:'role:board'});
/*seneca.act('role:board,action:get',{gameId : 123},function(err,result){
  if(err) return console.error(err)
  console.log(result);
})*/

/*seneca.act('role:board,action:add',{data:data},function(err,result){
  if(err) return console.error(err)
  console.log(result);
})*/



/*describe('Check LeaderBoard Crud',function(){
  var leaderBoardId;
  var updatedBoard = {
    name: 'Samuel',
    status:8
  }
  var newBoard ={
    name:'Jobs',
    status:4
  }
  var id;
  it('Check leaderBoard Add',function(done){
    seneca.act('role:board,action:add',{data:newBoard},function(err,saved_board){
      if(err) done(err)
      id = saved_board.id;
       saved_board.name.should.be.exactly(newBoard.name);
       done();
     })
 })
 it('Check leaderBoard Get',function(done){
  seneca.act('role:board,action:get',{id:id},function(err,result){
    if(err) done(err);
    else{
      result.name.should.be.exactly(newBoard.name);
      done();
    }
  })
})
it('Update the board by id',function(done){
    seneca.act('role:board,action:update',{id:id,data:updatedBoard},function(err,loaded_board){
      if(err) done(err)
      loaded_board.name.should.be.exactly(updatedBoard.name);
      done();
    })
  })
  it('Check Board delete',function(done){
    seneca.act({role:'board',action:'delete',id:leaderBoardId,data:updatedBoard},function(err,deleted_board){
      console.log(deleted_board);
      // if(err)done(err)
      // deleted_board.name.sould.be.exactly(Null);
      done();
    })
})
})*/

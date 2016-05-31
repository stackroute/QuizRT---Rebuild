var should = require ('should');
var seneca = require ('seneca')();
seneca.use('leaderboard-api');
seneca.use('entity');
seneca.use('mongo-store', {
  name: 'quizart',
  host: '127.0.0.1',
  port: 27017
});


describe('Check LeaderBoard Crud',function(){
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








})

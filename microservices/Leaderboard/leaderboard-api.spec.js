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
    name: 'BhargavReddy',

  }
  var newBoard ={
    name:'Vijayalakshmi',
    creationTime: '20/5/2016',
    rankingTable:[]
  }
  it('Check leaderBoard Add',function(done){
    seneca.act('role:board,action:add',{data:newBoard},function(err,saved_board){
      if(err) done(err);
      else {
        console.log(saved_board);
        this.act('role:board,action:get',{id:saved_board.id},function(err,loaded_board){
          if(err) done(err)
          leaderBoardId= loaded_board.id;
          done();
        })

      }
   })


  })




  it('Check Board update',function(done){
    seneca.act({role:'board',action:'update', id:leaderBoardId,data:updatedBoard},function(err,loaded_board){
         console.log(loaded_board);
        if(err) done(err)
        loaded_board.name.should.be.exactly(updatedBoard.name);
        done();

    })
  })
})

var leaderBoard = function(options){

  //load a board based on id.
  this.add({role:'board',action:'get'},function(msg,respond){
    this.make('board').load$(msg.id,function(err,result){
      respond(null,result)
    });
  });

  //create a new board
  this.add({role:'board',action:'add'},function(msg,respond){
    this.make('board').data$(msg.data).save$(respond);
  });

  // update a board
  this.add({role:'board',action:'update'},function(msg,respond){

    this.act({role:'board',action:'get',id:msg.id},function(err,loaded_board){


      loaded_board.data$({
        id:msg.id,
        name:msg.data.name
      }).save$(respond);

    });
  })

//delete a board
  this.add({role:'board',action:'delete'},function(msg,respond){
    this.make('board').remove$(msg.id,respond);
  })
 }
module.exports = leaderBoard ;

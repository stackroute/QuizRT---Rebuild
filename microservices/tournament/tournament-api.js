var tournamentPlugin = function(options){

  //load a tournament based on id.
  this.add({role:'tournament',action:'get'},function(msg,respond){
    this.make('tournament').load$(msg.id,respond);
  });

  //create a new tournament
  this.add({role:'tournament',action:'add'},function(msg,respond){
    this.make('tournament').data$(msg.data).save$(respond);
  });

  //update a tournament
  this.add({role:'tournament',action:'update'},function(msg,respond){

    this.act({role:'tournament',action:'get',id:msg.id},function(err,loaded_tournament){


      loaded_tournament.data$({
        id:msg.id,
        name: msg.data.name,
        desc: msg.data.desc,
        rules: msg.data.rules,
        prizes: msg.data.prizes,
        startDateTime: msg.data.startDateTime,
        endDateTime: msg.data.endDateTime,
        registeredUsers : msg.data.registeredUsers,
        usersPlayed: msg.data.usersPlayed,
        category: msg.data.category,
        hashtags: msg.data.hashtags,
        maxLevel: msg.data.maxLevel,
        minLevel: msg.data.minLevel,
        imageUrl: msg.data.imageUrl,
        avatarUrl: msg.data.avatarUrl
      }).save$(respond);

    });
  })


  this.add({role:'tournament',action:'delete'},function(msg,respond){
    this.make('tournament').remove$(msg.id,respond);
  })
}
module.exports = tournamentPlugin;

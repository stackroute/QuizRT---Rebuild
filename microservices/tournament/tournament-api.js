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
      this.make('tournament').loaded_tournament.data$({
        name: msg.name,
        desc: msg.desc,
        rules: msg.rules,
        prizes: msg.prizes,
        startDateTime: msg.startDateTime,
        endDateTime: msg.endDateTime,
        registeredUsers : msg.registeredUsers,
        usersPlayed: msg.usersPlayed,
        category: msg.category,
        hashtags: msg.hashtags,
        maxLevel: msg.maxLevel,
        minLevel: msg.minLevel,
        imageUrl: msg.imageUrl,
        avatarUrl: msg.avatarUrl
      }).save$(respond);

    });
  })

  this.add({role:'tournament',action:'delete'},function(msg,respond){
    this.make('tournament').remove$(msg.id,respond);
  })
}
module.exports = tournamentPlugin;

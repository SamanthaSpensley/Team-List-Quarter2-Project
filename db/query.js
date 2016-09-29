var knex = require('./knex.js');

var Users = function(){
  return knex('users')
}

module.exports = {
  getAllUsers : function(){
    return Users();
  },
  getAllUsersByIdAndGoogleProfileId : function(profile){
    return Users().where('id', profile.id).first()
  },
  insertAdditionalInfo: function(user, user_name, genre, instrument, influence, bio, admin) {
    return Users().where('id',user.id).update({
      user_name: user_name,
      genre: genre,
      musical_instrument: instrument,
      influence: influence,
      bio: bio,
      admin: false
    })
  }
}

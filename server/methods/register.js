Meteor.methods({
  isUsernameTaken(username) {
    return Meteor.users.find({"profile.username": username}).count() > 1;
  },
  sendVerificationLink(userId) {
    try {
      if ( userId ) {
        this.unblock();
        return Accounts.sendVerificationEmail( userId );
      } else {
        return false;
      }
    } catch(e) {
      console.log(e);
    }
    
  }
});
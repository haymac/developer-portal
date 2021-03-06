import { check } from 'meteor/check';

Meteor.methods({
  sendChatMessage(chatId, message) {
    check(chatId, String);
    check(message, String);
    
    return UserMessages.update({_id: chatId}, {
      $push: {
        messages: {
          dateSent: new Date(),
          read: false,
          message: message,
          byUser: Meteor.userId()
        }
      }
    });
  },
  createChat(targetUser) {
    check(targetUser, String);
    
    return UserMessages.insert({
      fromUserId: Meteor.userId(),
      toUserId: targetUser,
      messages: []
    });
  }
});
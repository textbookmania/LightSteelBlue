/**
 * Created by Rory on 12/15/2015.
 */
Template.UserOffers.helpers({
  ownProfile: function () {
    return this._id === Meteor.userId();
  }
});

Template.UserOffers.events({
  'click #messages-click': function() {
    Meteor.call("markViewed");
  }
});
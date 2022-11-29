import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Menus } from '../../api/vendor/menu';
import { Vendors } from '../../api/vendor/vendor';
import { UserProfiles } from '../../api/user/userProfile';
import { UserDiets } from '../../api/user/userDiet';
import { VendorProfiles } from '../../api/vendor/vendorProfile';

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Menus.userPublicationName, function () {
  return Menus.collection.find();
});

Meteor.publish(Vendors.userPublicationName, function () {
  return Vendors.collection.find();
});

Meteor.publish(UserProfiles.userPublicationName, function () {
  return UserProfiles.collection.find();
});

Meteor.publish(UserDiets.userPublicationName, function () {
  return UserDiets.collection.find();
});

Meteor.publish(VendorProfiles.userPublicationName, function () {
  return VendorProfiles.collection.find();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

Meteor.publish(Vendors.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Vendors.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

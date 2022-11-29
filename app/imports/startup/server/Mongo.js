import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { VendorProfiles } from '../../api/vendor/vendorProfile';
import { UserProfiles } from '../../api/user/userProfile';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addVendor = (data) =>
{
  console.log(`  Adding: ${data.name}`);
  VendorProfiles.collection.insert(data);
};

const addUserData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  UserProfiles.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addVendors = (vendors) => {
  console.log(`  Adding: ${vendors.vendorName} (${vendors.owner})`);
  VendorProfiles.collection.insert(vendors);
};

// Initialize the StuffsCollection if empty.
if (VendorProfiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultVendors) {
    console.log('Creating default vendors.');
    Meteor.settings.defaultVendors.forEach(vendors => addVendors(vendors));
// Initialize the VendorProfileCollection if empty.
if (VendorProfiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultVendors) {
    console.log('Creating default vendors.');
    Meteor.settings.defaultVendors.forEach(data => addVendor(data));
  }
}

// Initialize the UserProfilesCollection if empty
if (UserProfiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultUserData) {
    console.log('Creating default user data.');
    Meteor.settings.defaultUserData.forEach(data => addUserData(data));
  }
}

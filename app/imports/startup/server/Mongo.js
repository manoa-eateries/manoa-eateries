import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { UserProfiles } from '../../api/user/userProfile';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
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

// Initialize the UserProfilesCollection if empty
if (UserProfiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultUserData) {
    console.log('Creating default user data.');
    Meteor.settings.defaultUserData.forEach(data => addUserData(data));
  }
}

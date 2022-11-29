import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { VendorProfiles } from '../../api/vendor/vendorProfile';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
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
  }
}

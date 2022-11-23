import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The VendorProfilesCollection. It encapsulates state and variable values for stuff.
 */
class VendorProfilesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VendorProfilesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      owner: String,
      vendorName: String,
      logo: String,
      openHour: Date,
      closeHour: Date,
      location: String,
      weekdaysOpen: {
        type: String,
        allowedValues: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
      diets: {
        type: String,
        allowedValues: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Carnivore'],
      },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the VendorProfilesCollection.
 * @type {VendorProfilesCollection}
 */
export const VendorProfiles = new VendorProfilesCollection();

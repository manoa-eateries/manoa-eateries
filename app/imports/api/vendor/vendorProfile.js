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
      vendorName: String,
      owner: String,
      logo: String,
      openHour: Number,
      closeHour: Number,
      location: String,
      weekdaysOpen: String,
      Asian: Boolean,
      American: Boolean,
      European: Boolean,
      Hawaiian: Boolean,
      Hispanic: Boolean,
      Omnivore: Boolean,
      Vegan: Boolean,
      Vegetarian: Boolean,
      GlutenFree: Boolean,
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

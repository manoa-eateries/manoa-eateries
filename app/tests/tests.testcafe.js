import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { editProfilePage } from './editprofile.page';
import { listProfilePage } from './listprofile.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const userCredentials = { username: 'john@foo.com', password: 'changeme' };
const vendorCredentials = { username: 'dunkin', password: 'changeme' };

fixture('meteor-react-bootstrap-template localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that List All Vendors page works', async (testController) => {
  await navBar.gotoListAllVendors(testController);
});

test('Test that user sign-in and sign-out works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, userCredentials.username, userCredentials.password);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that vendor sign-in and sign-out works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, vendorCredentials.username, vendorCredentials.password);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that user profile page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, userCredentials.username, userCredentials.password);
  await navBar.gotoProfile(testController);
});

test('Test that user edit profile page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, userCredentials.username, userCredentials.password);
  await navBar.gotoProfile(testController);
  await listProfilePage.isDisplayed(testController);
  await listProfilePage.edit(testController);
  await editProfilePage.isDisplayed(testController);
  await editProfilePage.editInfo(testController);
});

test('Test that vendor edit profile page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, vendorCredentials.username, vendorCredentials.password);
  await navBar.gotoProfile(testController);
  await listProfilePage.isDisplayed(testController);
  await listProfilePage.edit(testController);
  await editProfilePage.isDisplayed(testController);
  await editProfilePage.editInfo(testController);
});
